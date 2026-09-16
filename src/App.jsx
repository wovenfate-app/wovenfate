import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchTitle, fetchCatalog, fetchInProgressTitleIds, fetchPurchasedTitleIds } from './data/supabaseClient.js';
import { useAuth } from './engine/useAuth.js';
import { useAnalytics } from './engine/useAnalytics.js';
import { useReadingProgress } from './engine/useReadingProgress.js';
import { useStoryEngine } from './engine/useStoryEngine.js';
import { useNarration } from './engine/useNarration.js';
import { useNarratorSettings } from './engine/useNarratorSettings.js';
import { getSavedPosition, saveSavedPosition, clearSavedPosition } from './engine/useNarrationPosition.js';
import { useVoiceChoice } from './engine/useVoiceChoice.js';
import { usePurchase } from './engine/usePurchase.js';
import { useBundlePurchase } from './engine/useBundlePurchase.js';
import { resolveAutoPurchaseAction } from './engine/purchaseRedirect.js';
import { ChapterView } from './components/ChapterView.jsx';
import { ChoiceList } from './components/ChoiceList.jsx';
import { EndingModal } from './components/EndingModal.jsx';
import { NarratorBar } from './components/NarratorBar.jsx';
import { Paywall } from './components/Paywall.jsx';
import { BundlePromo } from './components/BundlePromo.jsx';
import { LandingPage } from './components/LandingPage.jsx';
import { AppHeader } from './components/AppHeader.jsx';
import { AccountModal } from './components/AccountModal.jsx';
import './styles/app.css';

export default function App() {
  const { user, loading: authLoading, isAnonymous } = useAuth();
  const { track } = useAnalytics(user?.id);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  // Which title (if any) is selected. Reading straight from the URL on
  // first load means a Stripe redirect (?checkout=success&title=...)
  // drops the reader back into the right book, not the landing page.
  const [selectedTitleId, setSelectedTitleId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('title') || null;
  });

  const [catalog, setCatalog] = useState(null);
  const [inProgressIds, setInProgressIds] = useState(new Set());
  const [purchasedIds, setPurchasedIds] = useState(new Set());
  const [titleData, setTitleData] = useState(null);
  const [loadError, setLoadError] = useState(null);

  // Landing page needs the lightweight catalog list, not full story text.
  useEffect(() => {
    let cancelled = false;
    fetchCatalog()
      .then((rows) => { if (!cancelled) setCatalog(rows); })
      .catch((err) => { if (!cancelled) setLoadError(err); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!user?.id) return;
    let cancelled = false;
    fetchInProgressTitleIds(user.id)
      .then((ids) => { if (!cancelled) setInProgressIds(ids); })
      .catch((err) => console.error('Failed to load progress list:', err.message));
    return () => { cancelled = true; };
  }, [user?.id]);

  useEffect(() => {
    if (!user?.id) return;
    let cancelled = false;
    fetchPurchasedTitleIds(user.id)
      .then((ids) => { if (!cancelled) setPurchasedIds(ids); })
      .catch((err) => console.error('Failed to load purchased list:', err.message));
    return () => { cancelled = true; };
  }, [user?.id]);

  // Full story text only loads once a title is actually selected.
  useEffect(() => {
    if (!selectedTitleId) { setTitleData(null); return; }
    let cancelled = false;
    fetchTitle(selectedTitleId)
      .then((data) => { if (!cancelled) setTitleData(data); })
      .catch((err) => { if (!cancelled) setLoadError(err); });
    return () => { cancelled = true; };
  }, [selectedTitleId]);

  const { initialProgress, saveProgress } = useReadingProgress(user?.id, selectedTitleId);
  const [singleWaiting, setSingleWaiting] = useState(false);
  const [bundleWaiting, setBundleWaiting] = useState(false);
  const purchase = usePurchase(user?.id, selectedTitleId, singleWaiting);
  const bundle = useBundlePurchase(user?.id, catalog?.length, bundleWaiting);

  // Wrapped once here so both the landing-page bundle promo and the
  // in-reader one (passed down to StoryReader) log the same event shape.
  const trackedStartBundleCheckout = useCallback(() => {
    track('checkout_started', { titleId: selectedTitleId, payload: { checkout_type: 'bundle' } });
    bundle.startBundleCheckout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track, selectedTitleId, bundle.startBundleCheckout]);

  useEffect(() => {
    if (bundle.hasFullLibrary && user?.id) {
      fetchPurchasedTitleIds(user.id).then(setPurchasedIds).catch(() => {});
    }
  }, [bundle.hasFullLibrary, user?.id]);

  // If the reader hit the auth gate mid-purchase, verified their email,
  // and landed back here, resume the checkout automatically instead of
  // making them find and click "Unlock" a second time — that extra step
  // is exactly the kind of thing that reads as broken even though
  // nothing's actually wrong, just an avoidable bit of friction.
  //
  // BUT: the email on this link might belong to an account that already
  // owns this exact title/bundle — see resolveAutoPurchaseAction's header
  // comment (purchaseRedirect.js) for why, and why blindly firing checkout
  // here would double-charge a reader in that case.
  const autoPurchaseRef = useRef(false);
  useEffect(() => {
    if (autoPurchaseRef.current) return;
    if (authLoading || isAnonymous) return;
    const params = new URLSearchParams(window.location.search);
    const autoPurchase = params.get('autoPurchase');
    if (!autoPurchase) return;

    const action = resolveAutoPurchaseAction(autoPurchase, {
      isUnlocked: purchase.isUnlocked,
      hasFullLibrary: bundle.hasFullLibrary,
    });
    // 'wait': ownership isn't known yet — don't decide anything, and
    // don't strip the URL param, until it resolves.
    if (action === 'wait' || action === null) return;

    autoPurchaseRef.current = true;
    const url = new URL(window.location.href);
    url.searchParams.delete('autoPurchase');
    window.history.replaceState({}, '', url.pathname + url.search);

    if (action === 'bundle') {
      bundle.startBundleCheckout();
    } else if (action === 'single' && selectedTitleId) {
      purchase.startCheckout();
    }
    // action === 'skip': already owned — param is stripped above, and the
    // app will just show the unlocked content once render catches up.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authLoading, isAnonymous, selectedTitleId, purchase.isUnlocked, bundle.hasFullLibrary]);

  const handleBackToLanding = useCallback(() => {
    setSelectedTitleId(null);
    setTitleData(null);
    // Refresh so a just-finished/just-started title's Start/Continue
    // label is correct if the reader picks a title again this session.
    if (user?.id) {
      fetchInProgressTitleIds(user.id).then(setInProgressIds).catch(() => {});
      fetchPurchasedTitleIds(user.id).then(setPurchasedIds).catch(() => {});
    }
  }, [user?.id]);

  if (loadError) {
    return (
      <>
        <AppHeader title="Wovenfate" onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
        <div className="app-content">
          <div className="page">
            <p className="story-text">
              Couldn't load Wovenfate ({loadError.message}). Check your Supabase
              connection and try refreshing.
            </p>
          </div>
        </div>
        {accountModalOpen && (
          <AccountModal isAnonymous={isAnonymous} userEmail={user?.email} onClose={() => setAccountModalOpen(false)} />
        )}
      </>
    );
  }

  if (!selectedTitleId) {
    if (!catalog || authLoading) {
      return (
        <>
          <AppHeader title="Wovenfate" onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
          <div className="app-content">
            <div className="page"><p className="story-text">Loading…</p></div>
          </div>
        </>
      );
    }
    return (
      <>
        <AppHeader title="Wovenfate" onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
        <div className="app-content">
          <LandingPage
            titles={catalog}
            inProgressIds={inProgressIds}
            purchasedIds={purchasedIds}
            onSelect={setSelectedTitleId}
            isAnonymous={isAnonymous}
          />
          <div className="catalog-section">
            <BundlePromo
              titles={catalog}
              purchasedIds={purchasedIds}
              isAnonymous={isAnonymous}
              hasFullLibrary={bundle.hasFullLibrary}
              onUnlock={trackedStartBundleCheckout}
              loading={bundle.checkoutLoading}
              error={bundle.checkoutError}
              redirectPath="/?autoPurchase=bundle"
              waiting={bundleWaiting}
              setWaiting={setBundleWaiting}
            />
          </div>
        </div>
        {accountModalOpen && (
          <AccountModal isAnonymous={isAnonymous} userEmail={user?.email} onClose={() => setAccountModalOpen(false)} />
        )}
      </>
    );
  }

  const resumeReady = initialProgress !== undefined;
  if (!titleData || authLoading || !resumeReady || purchase.isUnlocked === undefined) {
    return (
      <>
        <AppHeader title="Wovenfate" onBack={handleBackToLanding} />
        <div className="app-content">
          <div className="page"><p className="story-text">Loading…</p></div>
        </div>
      </>
    );
  }

  return (
    <StoryReader
      title={titleData.title}
      story={titleData.story}
      resumeFrom={initialProgress}
      onProgressChange={saveProgress}
      purchase={purchase}
      bundle={bundle}
      track={track}
      catalog={catalog}
      purchasedIds={purchasedIds}
      isAnonymous={isAnonymous}
      userEmail={user?.email}
      onBackToLanding={handleBackToLanding}
      accountModalOpen={accountModalOpen}
      setAccountModalOpen={setAccountModalOpen}
      singleWaiting={singleWaiting}
      setSingleWaiting={setSingleWaiting}
      bundleWaiting={bundleWaiting}
      setBundleWaiting={setBundleWaiting}
    />
  );
}

function StoryReader({ title, story, resumeFrom, onProgressChange, purchase, bundle, track, catalog, purchasedIds, isAnonymous, userEmail, onBackToLanding, accountModalOpen, setAccountModalOpen, singleWaiting, setSingleWaiting, bundleWaiting, setBundleWaiting }) {
  const { currentNode, currentNodeId, choose, restart } = useStoryEngine(story, resumeFrom, onProgressChange);
  const narration = useNarration();
  const voiceChoice = useVoiceChoice();
  const [savedSettings, updateSavedSettings] = useNarratorSettings();

  // Restore auto-read/hands-free immediately from storage — these are
  // simple booleans, no need to wait for anything else to load first.
  const [autoRead, setAutoReadRaw] = useState(() => savedSettings.autoRead ?? false);
  const [handsFree, setHandsFreeRaw] = useState(() => savedSettings.handsFree ?? false);

  const setAutoRead = useCallback((value) => {
    setAutoReadRaw(value);
    updateSavedSettings({ autoRead: value });
  }, [updateSavedSettings]);

  const setHandsFree = useCallback((value) => {
    setHandsFreeRaw(value);
    updateSavedSettings({ handsFree: value });
  }, [updateSavedSettings]);

  const handsFreeRef = useRef(handsFree);
  useEffect(() => { handsFreeRef.current = handsFree; }, [handsFree]);

  // Once the voice list actually loads, resolve any saved voice
  // *names* back to indices in this session's list. Only runs once
  // (guarded by hasRestoredVoices) so it doesn't fight with the user
  // manually picking a different voice afterward.
  const hasRestoredVoicesRef = useRef(false);
  useEffect(() => {
    if (hasRestoredVoicesRef.current || narration.voices.length === 0) return;
    hasRestoredVoicesRef.current = true;

    const findByName = (name) => narration.voices.findIndex((v) => v.name === name);
    if (savedSettings.narratorVoiceName) {
      const i = findByName(savedSettings.narratorVoiceName);
      if (i >= 0) narration.setNarratorVoice(i);
    }
    if (savedSettings.herVoiceName) {
      const i = findByName(savedSettings.herVoiceName);
      if (i >= 0) narration.setHerVoice(i);
    }
    if (savedSettings.hisVoiceName) {
      const i = findByName(savedSettings.hisVoiceName);
      if (i >= 0) narration.setHisVoice(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narration.voices]);

  // Save voice choices by name whenever they change (after restoration,
  // so we're not immediately re-saving the defaults over a real
  // preference during the initial load race).
  useEffect(() => {
    if (!hasRestoredVoicesRef.current) return;
    const name = narration.voices[narration.narratorVoice]?.name;
    if (name) updateSavedSettings({ narratorVoiceName: name });
  }, [narration.narratorVoice, narration.voices, updateSavedSettings]);

  useEffect(() => {
    if (!hasRestoredVoicesRef.current) return;
    const name = narration.voices[narration.herVoice]?.name;
    if (name) updateSavedSettings({ herVoiceName: name });
  }, [narration.herVoice, narration.voices, updateSavedSettings]);

  useEffect(() => {
    if (!hasRestoredVoicesRef.current) return;
    const name = narration.voices[narration.hisVoice]?.name;
    if (name) updateSavedSettings({ hisVoiceName: name });
  }, [narration.hisVoice, narration.voices, updateSavedSettings]);

  const isLockedAndUnpaid = currentNode.locked && !purchase.isUnlocked;

  // --- Reader-behavior tracking -------------------------------------
  // Kept out of useStoryEngine itself (see that hook's header comment)
  // and placed here instead, where title/purchase state is in scope.

  // One event per chapter actually reached, locked or not — this is
  // what answers "where do readers drop off" later.
  useEffect(() => {
    track('chapter_viewed', {
      titleId: title.id,
      payload: { node_id: currentNodeId, chapter: currentNode.chapter, locked: !!currentNode.locked },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNodeId, title.id]);

  const trackedChoose = useCallback((choice) => {
    track('choice_made', { titleId: title.id, payload: { node_id: currentNodeId, choice_label: choice.label } });
    choose(choice);
  }, [track, title.id, currentNodeId, choose]);

  // Guarded on node id so re-renders of the same locked chapter (e.g. a
  // checkout error redraw) don't log the same paywall view repeatedly.
  const paywallLoggedForRef = useRef(null);
  useEffect(() => {
    if (isLockedAndUnpaid && paywallLoggedForRef.current !== currentNodeId) {
      paywallLoggedForRef.current = currentNodeId;
      track('paywall_viewed', { titleId: title.id, payload: { node_id: currentNodeId } });
    }
  }, [isLockedAndUnpaid, currentNodeId, title.id, track]);

  const endingLoggedForRef = useRef(null);
  useEffect(() => {
    if (!isLockedAndUnpaid && currentNode.ending && endingLoggedForRef.current !== currentNodeId) {
      endingLoggedForRef.current = currentNodeId;
      track('ending_reached', { titleId: title.id, payload: { ending_tag: currentNode.tag } });
    }
  }, [isLockedAndUnpaid, currentNode, currentNodeId, title.id, track]);

  const trackedStartCheckout = useCallback(() => {
    track('checkout_started', { titleId: title.id, payload: { checkout_type: 'single' } });
    purchase.startCheckout();
  }, [track, title.id, purchase]);

  const trackedStartBundleCheckoutInReader = useCallback(() => {
    track('checkout_started', { titleId: title.id, payload: { checkout_type: 'bundle' } });
    bundle.startBundleCheckout();
  }, [track, title.id, bundle]);
  // --------------------------------------------------------------------

  const maybeListen = useCallback((node) => {
    if (handsFreeRef.current && node.choices) {
      voiceChoice.listenForChoice(node.choices, (index) => choose(node.choices[index]));
    }
  }, [voiceChoice, choose]);

  // Only the very first time narration plays in this session should it
  // resume from a saved mid-chapter position — after that, normal
  // navigation to a new chapter should always start that chapter fresh.
  const hasUsedResumePositionRef = useRef(false);

  const speakCurrentNode = useCallback(() => {
    const positionKey = `${title.id}:${currentNodeId}`;
    const startIndex = hasUsedResumePositionRef.current ? 0 : getSavedPosition(positionKey);
    hasUsedResumePositionRef.current = true;

    narration.speakNode(
      currentNode,
      () => {
        clearSavedPosition(positionKey); // finished naturally — nothing to resume next time
        maybeListen(currentNode);
      },
      {
        startIndex,
        onSegmentStart: (i) => saveSavedPosition(positionKey, i),
      }
    );
  }, [narration, currentNode, currentNodeId, title.id, maybeListen]);

  const playPause = useCallback(() => {
    if (narration.isPaused) {
      narration.resume();
    } else if (narration.isSpeaking) {
      narration.pause();
    } else {
      speakCurrentNode();
    }
  }, [narration, speakCurrentNode]);

  useEffect(() => {
    narration.stop();
    if (autoRead && !isLockedAndUnpaid) speakCurrentNode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNode, isLockedAndUnpaid]);

  return (
    <>
      <AppHeader
        title={title.name}
        subtitle={!isLockedAndUnpaid ? currentNode.chapter : undefined}
        onBack={() => { narration.stop(); onBackToLanding(); }}
        onAccountClick={() => setAccountModalOpen(true)}
        accountLinked={!isAnonymous}
      />
      <div className="app-content">
        <div className="book">
          {!isLockedAndUnpaid && (
            <NarratorBar
              narration={narration}
              voiceChoice={voiceChoice}
              autoRead={autoRead}
              setAutoRead={setAutoRead}
              handsFree={handsFree}
              setHandsFree={setHandsFree}
              onPlayPause={playPause}
              playLabel={narration.isPaused ? 'Resume' : narration.isSpeaking ? 'Pause' : 'Read aloud'}
            />
          )}

          {isLockedAndUnpaid ? (
            <>
              <Paywall
                title={title}
                titleId={title.id}
                isAnonymous={isAnonymous}
                onUnlock={trackedStartCheckout}
                loading={purchase.checkoutLoading}
                error={purchase.checkoutError}
                waiting={singleWaiting}
                setWaiting={setSingleWaiting}
              />
              <BundlePromo
                titles={catalog || []}
                purchasedIds={purchasedIds}
                isAnonymous={isAnonymous}
                hasFullLibrary={bundle.hasFullLibrary}
                onUnlock={trackedStartBundleCheckoutInReader}
                loading={bundle.checkoutLoading}
                error={bundle.checkoutError}
                redirectPath={`/?title=${title.id}&autoPurchase=bundle`}
                waiting={bundleWaiting}
                setWaiting={setBundleWaiting}
                compact
              />
            </>
          ) : (
            <div className="page page-transition" key={currentNode.chapter}>
              <ChapterView node={currentNode} />
              <ChoiceList node={currentNode} onChoose={trackedChoose} onRestart={restart} />
            </div>
          )}
          {!isLockedAndUnpaid && currentNode.ending && (
            <EndingModal titleId={title.id} titleName={title.name} endingTag={currentNode.tag} />
          )}
        </div>
      </div>
      {accountModalOpen && (
        <AccountModal isAnonymous={isAnonymous} userEmail={userEmail} onClose={() => setAccountModalOpen(false)} />
      )}
    </>
  );
}

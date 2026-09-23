import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchTitle, fetchCatalog, fetchInProgressTitleIds, fetchPurchasedTitleIds } from './data/supabaseClient.js';
import { useAuth } from './engine/useAuth.js';
import { useAnalytics } from './engine/useAnalytics.js';
import { useReadingProgress } from './engine/useReadingProgress.js';
import { useStoryEngine } from './engine/useStoryEngine.js';
import { useNarration } from './engine/useNarration.js';
import { useAudioNarration } from './engine/useAudioNarration.js';
import { useNarratorSettings, isMultiVoiceEnabled, withMultiVoiceSetting } from './engine/useNarratorSettings.js';
import { getSavedPosition, saveSavedPosition, clearSavedPosition } from './engine/useNarrationPosition.js';
import { useVoiceChoice } from './engine/useVoiceChoice.js';
import { usePurchase } from './engine/usePurchase.js';
import { useBundlePurchase } from './engine/useBundlePurchase.js';
import { resolveAutoPurchaseAction } from './engine/purchaseRedirect.js';
import { parseRoute, pathFor } from './engine/routes.js';
import { NotFoundPage } from './components/NotFoundPage.jsx';
import { BOOK_DETAILS } from './data/bookDetails.js';
import { ChapterView } from './components/ChapterView.jsx';
import { ChoiceList } from './components/ChoiceList.jsx';
import { EndingModal } from './components/EndingModal.jsx';
import { NarratorBar } from './components/NarratorBar.jsx';
import { Paywall } from './components/Paywall.jsx';
import { BundlePromo } from './components/BundlePromo.jsx';
import { LandingPage, SiteFooter } from './components/LandingPage.jsx';
import { TitleCoverPage } from './components/TitleCoverPage.jsx';
import { AppHeader } from './components/AppHeader.jsx';
import { AccountModal } from './components/AccountModal.jsx';
import { visitPayload } from './engine/analyticsEvents.js';
import './styles/app.css';

// The URL and referrer this visit arrived with, before any in-app
// navigation replaces them (see the site_visited effect in App).
const LANDING = { href: window.location.href, referrer: document.referrer };

export default function App() {
  const { user, loading: authLoading, isAnonymous } = useAuth();
  const { track } = useAnalytics(user?.id);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  // One site_visited event per browser session, recording where the
  // visit came from (utm_* on campaign links, else the referring site).
  // LANDING is captured at module load, before navigate() rewrites the
  // URL. Waits for the anonymous user, since events need an owner.
  useEffect(() => {
    if (!user?.id) return;
    try {
      if (sessionStorage.getItem('wf_visit_logged')) return;
      sessionStorage.setItem('wf_visit_logged', '1');
    } catch { /* storage blocked — log it anyway, at worst twice */ }
    track('site_visited', { payload: visitPayload(LANDING.href, LANDING.referrer) });
  }, [user?.id, track]);

  // Which screen is showing, kept in step with the URL (see routes.js):
  // /, /book/:id (the title's cover page) or /read/:id. Reading it from
  // the URL on first load also covers a Stripe redirect
  // (?checkout=success&title=...), which drops the reader straight back
  // into the right book, skipping the cover page.
  const [route, setRoute] = useState(() => parseRoute(window.location.pathname, window.location.search));
  const selectedTitleId = route.titleId ?? null;
  const enteredReading = route.view === 'read';

  const navigate = useCallback((next, { replace = false } = {}) => {
    const path = pathFor(next);
    if (replace) window.history.replaceState({}, '', path);
    else window.history.pushState({}, '', path);
    setRoute(next);
  }, []);

  // Browser/phone back and forward move between screens instead of
  // leaving the site.
  useEffect(() => {
    const onPopState = () => setRoute(parseRoute(window.location.pathname, window.location.search));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleSelectTitle = useCallback((titleId) => {
    navigate({ view: 'book', titleId });
    // The cover page renders in place of the landing page without a page
    // load, so it would otherwise inherit however far down the reader had
    // scrolled to reach this title's card.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [navigate]);

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

  // Full story text only loads once a title is actually selected — and
  // only once the catalog confirms that title exists, so a mistyped
  // /book/:id or /read/:id link shows the not-found page instead of a
  // load error.
  const selectedTitleExists = !!catalog?.some((t) => t.id === selectedTitleId);
  useEffect(() => {
    if (!selectedTitleId || !selectedTitleExists) { setTitleData(null); return; }
    let cancelled = false;
    fetchTitle(selectedTitleId)
      .then((data) => { if (!cancelled) setTitleData(data); })
      .catch((err) => { if (!cancelled) setLoadError(err); });
    return () => { cancelled = true; };
  }, [selectedTitleId, selectedTitleExists]);

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
    navigate({ view: 'landing' });
  }, [navigate]);

  // Whenever the landing page comes back into view — via the header's
  // back button or the browser's — refresh so a just-finished/just-started
  // title's Start/Continue label is correct if the reader picks a title
  // again this session.
  const previousViewRef = useRef(route.view);
  useEffect(() => {
    const cameFromTitle = previousViewRef.current !== 'landing';
    previousViewRef.current = route.view;
    if (route.view !== 'landing' || !cameFromTitle || !user?.id) return;
    fetchInProgressTitleIds(user.id).then(setInProgressIds).catch(() => {});
    fetchPurchasedTitleIds(user.id).then(setPurchasedIds).catch(() => {});
  }, [route.view, user?.id]);

  // A legacy /?title= arrival (Stripe return, sign-in link) swaps its URL
  // for the canonical /read/:id once the purchase hooks have finished
  // reading and stripping their query params — so a refresh or a shared
  // link from here onward points at the book, not the landing page.
  useEffect(() => {
    if (!route.legacy) return;
    const params = new URLSearchParams(window.location.search);
    if (params.has('checkout') || params.has('autoPurchase')) return;
    navigate({ view: 'read', titleId: route.titleId }, { replace: true });
  });

  // Per-screen document title and description, so each book's page reads
  // properly in browser tabs, link previews and search results.
  const catalogEntryForMeta = catalog?.find((t) => t.id === selectedTitleId);
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!meta.dataset.default) meta.dataset.default = meta.content;
    if (catalogEntryForMeta) {
      document.title = `${catalogEntryForMeta.name} — Interactive Romantasy | Wovenfate`;
      meta.content = catalogEntryForMeta.tagline || meta.dataset.default;
      // Reading and the book page are one book as far as search engines
      // are concerned — both point at the book page.
      if (canonical) canonical.href = `https://www.wovenfate.app/book/${catalogEntryForMeta.id}`;
    } else {
      document.title = route.view === 'notfound' ? 'Page not found | Wovenfate' : 'Wovenfate — Interactive Romantasy Fiction';
      meta.content = meta.dataset.default;
      if (canonical) canonical.href = 'https://www.wovenfate.app/';
    }
  }, [catalogEntryForMeta, route.view]);

  if (loadError) {
    return (
      <>
        <AppHeader title="Wovenfate" logo onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
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

  // A path that isn't a screen at all, or a /book|/read link to a title id
  // that doesn't exist (once the catalog has loaded to check against).
  const unknownTitle = selectedTitleId && catalog && !catalog.some((t) => t.id === selectedTitleId);
  if (route.view === 'notfound' || unknownTitle) {
    return (
      <>
        <AppHeader title="Wovenfate" logo onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
        <div className="app-content">
          <NotFoundPage onHome={handleBackToLanding} />
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
          <AppHeader title="Wovenfate" logo onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
          <div className="app-content">
            <div className="page"><p className="story-text">Loading…</p></div>
          </div>
        </>
      );
    }
    return (
      <>
        <AppHeader title="Wovenfate" logo onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
        <div className="app-content">
          <LandingPage
            titles={catalog}
            inProgressIds={inProgressIds}
            purchasedIds={purchasedIds}
            onSelect={handleSelectTitle}
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
          <SiteFooter />
        </div>
        {accountModalOpen && (
          <AccountModal isAnonymous={isAnonymous} userEmail={user?.email} onClose={() => setAccountModalOpen(false)} />
        )}
      </>
    );
  }

  // Cover page: shown once after picking a title, before loading its
  // chapter text. catalogEntry is only missing in freak edge cases
  // (e.g. a title unpublished mid-session) — fall through to the normal
  // reading flow rather than getting stuck on a dead end.
  const catalogEntry = catalog?.find((t) => t.id === selectedTitleId);
  if (!enteredReading && catalogEntry) {
    return (
      <>
        {/* The book's name is the page's own heading, so the header shows
            the brand here rather than repeating it. */}
        <AppHeader title="Wovenfate" logo onBack={handleBackToLanding} onAccountClick={() => setAccountModalOpen(true)} accountLinked={!isAnonymous} />
        <div className="app-content">
          <TitleCoverPage
            title={catalogEntry}
            hasProgress={inProgressIds.has(selectedTitleId)}
            isPurchased={purchasedIds.has(selectedTitleId) || purchase.isUnlocked === true}
            onEnter={() => navigate({ view: 'read', titleId: selectedTitleId })}
            unlock={{
              isAnonymous,
              onUnlock: () => {
                track('checkout_started', { titleId: selectedTitleId, payload: { checkout_type: 'single', source: 'book_page' } });
                purchase.startCheckout();
              },
              loading: purchase.checkoutLoading,
              error: purchase.checkoutError,
              waiting: singleWaiting,
              setWaiting: setSingleWaiting,
            }}
          />
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
  const { currentNode, currentNodeId, pathTaken, choose, restart } = useStoryEngine(story, resumeFrom, onProgressChange);
  const details = BOOK_DETAILS[title.id];
  const [savedSettings, updateSavedSettings] = useNarratorSettings();

  // Per-book "read dialogue in character voices" toggle — only matters
  // once a title actually has pre-rendered audio (see audioNarration
  // below); harmless to compute regardless.
  const multiVoice = isMultiVoiceEnabled(savedSettings, title.id);
  const setMultiVoice = useCallback((enabled) => {
    // updateSavedSettings shallow-merges its argument over the previous
    // settings (see useNarratorSettings) rather than taking an updater
    // function, so the merged multiVoiceByTitle has to be computed here
    // from the current savedSettings, same as the autoRead/handsFree
    // setters above.
    updateSavedSettings(withMultiVoiceSetting(savedSettings, title.id, enabled));
  }, [updateSavedSettings, savedSettings, title.id]);

  // Two narration backends are always instantiated — React hooks can't be
  // called conditionally — and the pre-rendered ElevenLabs audio backend
  // wins whenever this title actually has audio generated for it
  // (`available`); otherwise this falls back to the browser's
  // speechSynthesis voices exactly as before. See useAudioNarration.js.
  const audioNarration = useAudioNarration(title.id, multiVoice);
  const browserNarration = useNarration();
  const narration = audioNarration.available ? audioNarration : browserNarration;

  // Whether this title has real, reader-ready narration at all. There is
  // deliberately no reader-facing fallback to the browser's robotic
  // speechSynthesis voices any more — a title without pre-rendered
  // ElevenLabs audio yet just shows no narration UI, rather than a worse
  // version of the feature. See useAudioNarration's `available`.
  const narrationAvailable = audioNarration.available;

  const voiceChoice = useVoiceChoice();

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

  // The word currently being read aloud, passed to ChapterView to
  // highlight — null whenever nothing is playing or between segments.
  const [spokenWord, setSpokenWord] = useState(null);

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
        onWordBoundary: setSpokenWord,
        nodeId: currentNodeId, // only used by useAudioNarration, to look the node up in its manifest
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
    if (narrationAvailable && autoRead && !isLockedAndUnpaid) speakCurrentNode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNode, isLockedAndUnpaid, narrationAvailable]);

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
          {!isLockedAndUnpaid && narrationAvailable && (
            <NarratorBar
              narration={narration}
              voiceChoice={voiceChoice}
              multiVoice={multiVoice}
              setMultiVoice={setMultiVoice}
              autoRead={autoRead}
              setAutoRead={setAutoRead}
              handsFree={handsFree}
              setHandsFree={setHandsFree}
              onPlayPause={playPause}
              playLabel={narration.isPaused ? 'Resume' : narration.isSpeaking ? 'Pause' : 'Read aloud'}
            />
          )}

          {isLockedAndUnpaid ? (
            <Paywall
              title={title}
              // Each choice made is one chapter finished, so the choices
              // so far are both the progress count and the last choice.
              chosenLabel={pathTaken[pathTaken.length - 1]}
              chaptersRead={pathTaken.length}
              totalChapters={details?.chapters}
              endings={details?.endings}
              isAnonymous={isAnonymous}
              onUnlock={trackedStartCheckout}
              loading={purchase.checkoutLoading}
              error={purchase.checkoutError}
              waiting={singleWaiting}
              setWaiting={setSingleWaiting}
            >
              {/* Hidden while the single-title account step is open, so
                  the card shows one flow at a time. */}
              {!singleWaiting && !bundle.hasFullLibrary && (
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
              )}
            </Paywall>
          ) : (
            <div className="page page-transition" key={currentNode.chapter}>
              <ChapterView node={currentNode} spokenWord={spokenWord} />
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

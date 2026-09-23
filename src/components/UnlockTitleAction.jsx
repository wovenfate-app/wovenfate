import { useState } from 'react';
import { AuthGate } from './AuthGate.jsx';
import { isNativeApp } from '../engine/platform.js';
import { useCrossDeviceEmailCheck } from '../engine/useCrossDeviceEmailCheck.js';

/**
 * The "Unlock this book" action shared by the paywall and the book page:
 * the button, the account step an anonymous reader goes through first,
 * and the checkout error. `secondary` renders the outline style, for
 * places where the unlock isn't the page's main action.
 */
export function UnlockTitleAction({ title, isAnonymous, onUnlock, loading, error, waiting, setWaiting, secondary }) {
  const priceDisplay = title.price_cents
    ? `£${(title.price_cents / 100).toFixed(2)}`
    : '';

  // Only relevant once AuthGate reports the email fell into the
  // "already has an account" fallback (see useEmailAuth.js) — that's the
  // one case the normal same-id refresh flow can't detect on its own.
  const [crossDeviceEmail, setCrossDeviceEmail] = useState(null);
  const [crossDeviceMode, setCrossDeviceMode] = useState(null);
  const crossDevice = useCrossDeviceEmailCheck({
    email: crossDeviceEmail,
    active: crossDeviceMode === 'signin',
    titleId: title.id,
  });

  const handleUnlockClick = () => {
    if (isAnonymous) {
      // Purchases must be tied to a real account before checkout — an
      // anonymous session can be lost (cleared cookies, new device)
      // and take a paid unlock down with it. Price/description stay
      // visible either way; only the button's destination changes.
      setWaiting(true);
      return;
    }
    onUnlock();
  };

  if (isNativeApp()) {
    // Reader App pattern: no purchase flow at all inside the native
    // app — price is informational only. Buying happens on the
    // website, in the reader's own browser, then the unlock follows
    // automatically once they're signed into the same account here.
    return (
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
          {priceDisplay}
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.6 }}>
          To unlock this title, visit <strong style={{ color: 'var(--ink)' }}>wovenfate.app</strong> in
          your browser and sign in with the same account. Once purchased,
          it unlocks here automatically.
        </p>
      </div>
    );
  }

  if (isAnonymous && waiting) {
    return (
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, marginTop: 4 }}>
        <AuthGate
          heading="Create a free account to continue"
          description="This keeps your purchase safe — it can't be lost even if you clear your browser or switch devices. No password needed."
          redirectPath={`/?title=${title.id}&autoPurchase=single`}
          crossDevice={crossDevice}
          onLinkSent={(email, mode) => { setCrossDeviceEmail(email); setCrossDeviceMode(mode); }}
        />
        <button className="btn-link" onClick={() => setWaiting(false)} style={{ marginTop: 12 }}>
          Never mind
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        className={secondary ? 'btn-secondary' : 'btn-primary'}
        onClick={handleUnlockClick}
        disabled={loading}
      >
        {loading ? 'Opening checkout…' : `Unlock this book — ${priceDisplay}`}
      </button>
      {error && (
        <p style={{ fontSize: 13, color: 'var(--ember)', marginTop: 12 }}>{error}</p>
      )}
      <p style={{ fontSize: 12, color: 'var(--ink-dim)', marginTop: 12, marginBottom: 0 }}>
        One-off payment, yours to keep · Payment handled securely by Stripe
      </p>
    </>
  );
}

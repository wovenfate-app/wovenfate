import { useState } from 'react';
import { AuthGate } from './AuthGate.jsx';
import { isNativeApp } from '../engine/platform.js';
import { useCrossDeviceEmailCheck } from '../engine/useCrossDeviceEmailCheck.js';

// Mirrors the server's pricing exactly (see create-checkout-session)
// so what's displayed always matches what Stripe will actually charge.
// Kept in sync deliberately rather than fetched, since this is just for
// display — the server is what actually enforces the real price.
const BUNDLE_PRICE_CENTS = 1000; // £10.00
const MIN_CHARGE_CENTS = 30; // £0.30, Stripe's documented GBP minimum

export function BundlePromo({ titles, purchasedIds, isAnonymous, hasFullLibrary, onUnlock, loading, error, redirectPath, compact, waiting, setWaiting }) {
  // See Paywall.jsx's identical setup for why this exists — covers the
  // "email already has an account" fallback that same-id refresh polling
  // can't detect on its own.
  const [crossDeviceEmail, setCrossDeviceEmail] = useState(null);
  const [crossDeviceMode, setCrossDeviceMode] = useState(null);
  const crossDevice = useCrossDeviceEmailCheck({
    email: crossDeviceEmail,
    active: crossDeviceMode === 'signin',
    bundle: true,
  });

  if (hasFullLibrary) {
    if (compact) return null; // nothing to upsell on the paywall if they already own everything
    return (
      <div className="page" style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 16, margin: 0 }}>
          You own the full library — happy reading.
        </p>
      </div>
    );
  }

  const owned = titles.filter((t) => purchasedIds?.has(t.id));
  const remaining = titles.filter((t) => !purchasedIds?.has(t.id));
  const alreadyPaid = owned.reduce((sum, t) => sum + (t.price_cents || 0), 0);
  const remainingIndividualTotal = remaining.reduce((sum, t) => sum + (t.price_cents || 0), 0);
  const unitAmount = Math.max(MIN_CHARGE_CENTS, BUNDLE_PRICE_CENTS - alreadyPaid);
  const hasCredit = alreadyPaid > 0;

  const priceDisplay = `£${(unitAmount / 100).toFixed(2)}`;
  const remainingIndividualDisplay = `£${(remainingIndividualTotal / 100).toFixed(2)}`;
  const savingsCents = Math.max(0, remainingIndividualTotal - unitAmount);
  const savingsDisplay = `£${(savingsCents / 100).toFixed(2)}`;
  const label = hasCredit ? `Complete your collection — ${remaining.length} left` : 'Full Library';
  const countLabel = hasCredit ? `the remaining ${remaining.length} book${remaining.length === 1 ? '' : 's'}` : `all ${titles.length} books`;

  const handleClick = () => {
    if (isAnonymous) { setWaiting(true); return; }
    onUnlock();
  };

  // Reader App pattern: no purchase flow inside the native app — price
  // is informational only, in both the compact and full card variants.
  if (isNativeApp()) {
    if (compact) {
      return (
        <p style={{ marginTop: 14, fontSize: 12, color: 'var(--ink-dim)', textAlign: 'center' }}>
          Or unlock {countLabel} for {priceDisplay} at <strong style={{ color: 'var(--ink)' }}>wovenfate.app</strong>
        </p>
      );
    }
    return (
      <div className="page" style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 18, marginBottom: 6 }}>{label}</p>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, marginBottom: 10 }}>{priceDisplay}</p>
        <p style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.6 }}>
          To unlock {countLabel}, visit <strong style={{ color: 'var(--ink)' }}>wovenfate.app</strong> in
          your browser and sign in with the same account.
        </p>
      </div>
    );
  }

  if (isAnonymous && waiting) {
    return (
      <div className={compact ? '' : 'page'} style={{ textAlign: 'center' }}>
        <AuthGate
          heading="Create a free account to continue"
          description="This keeps your purchase safe — it can't be lost even if you clear your browser or switch devices. No password needed."
          redirectPath={redirectPath}
          crossDevice={crossDevice}
          onLinkSent={(email, mode) => { setCrossDeviceEmail(email); setCrossDeviceMode(mode); }}
        />
        <button className="btn-link" onClick={() => setWaiting(false)} style={{ marginTop: 12 }}>
          Never mind
        </button>
      </div>
    );
  }

  if (compact) {
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleClick} disabled={loading} className="btn-secondary">
          {loading
            ? 'Opening checkout…'
            : savingsCents > 0
            ? `Unlock ${countLabel} — ${priceDisplay} (save ${savingsDisplay})`
            : `Unlock ${countLabel} — ${priceDisplay}`}
        </button>
        {error && <p style={{ fontSize: 12, color: 'var(--ember)', marginTop: 8 }}>{error}</p>}
      </div>
    );
  }

  return (
    <div className="page" style={{ position: 'relative', overflow: 'visible' }}>
      <span style={{
        position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
        background: 'var(--ember)', color: '#1f1408', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.03em', padding: '4px 14px', borderRadius: 20,
        whiteSpace: 'nowrap',
      }}>
        ★ BEST VALUE
      </span>
      <div style={{ textAlign: 'center', paddingTop: 8 }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 20, margin: '0 0 4px' }}>
          {label}
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-dim)', marginBottom: 16 }}>
          {hasCredit
            ? `You already own ${owned.length} — unlock ${countLabel}`
            : `Unlock ${countLabel} completely`}
        </p>
        <p style={{ margin: '0 0 4px' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 600 }}>{priceDisplay}</span>
        </p>
        {savingsCents > 0 && (
          <p style={{ fontSize: 13, color: 'var(--ink-dim)', marginBottom: 20 }}>
            <span style={{ textDecoration: 'line-through' }}>{remainingIndividualDisplay}</span>
            {' '}— save {savingsDisplay}
          </p>
        )}
        {hasCredit && (
          <p style={{ fontSize: 12, color: 'var(--violet)', marginBottom: 20 }}>
            Credited {`£${(alreadyPaid / 100).toFixed(2)}`} for books you already own
          </p>
        )}
        <button className="btn-primary" onClick={handleClick} disabled={loading}>
          {loading ? 'Opening checkout…' : `Unlock ${countLabel} — ${priceDisplay}`}
        </button>
        {error && <p style={{ fontSize: 13, color: 'var(--ember)', marginTop: 12 }}>{error}</p>}
      </div>
    </div>
  );
}

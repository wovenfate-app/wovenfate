import { useState, useEffect, useRef } from 'react';
import { useEmailAuth } from '../engine/useEmailAuth.js';
import { supabase } from '../data/supabaseClient.js';
import { stripAutoPurchaseParam } from '../engine/purchaseRedirect.js';

// crossDevice is optional — only Paywall/BundlePromo pass it, since only
// they know the titleId/bundle context a purchase check needs. When
// present, { confirmed, resendForThisDevice } comes from
// useCrossDeviceEmailCheck and covers the "email already had an account"
// fallback path, which the ordinary refreshSession-based flow below
// cannot: see that hook's header comment for why.
export function AuthGate({ heading, description, redirectPath, compact, crossDevice, onLinkSent }) {
  const [email, setEmail] = useState('');
  const { status, error, mode, sendAuthLink } = useEmailAuth();
  const pollCountRef = useRef(0);
  const [resendState, setResendState] = useState('idle'); // idle | sending | sent | error

  // While waiting on email confirmation, periodically force a fresh
  // session check. This matters specifically for the cross-device case
  // (link clicked on a phone while this tab is on a PC): the original
  // tab's local session doesn't automatically know anything changed —
  // there's no live push between devices — but refreshSession() asks
  // Supabase for the current server-side state of the account, which
  // *does* reflect the other device's confirmation, since it's the same
  // underlying account either way. A successful refresh fires the same
  // auth-state-changed event the rest of the app already listens to
  // (see useAuth.js), so isAnonymous flips automatically and this
  // screen falls away on its own — no manual reload needed.
  useEffect(() => {
    if (status !== 'sent') return;
    pollCountRef.current = 0;

    const interval = setInterval(async () => {
      pollCountRef.current += 1;
      if (pollCountRef.current > 40) { // ~3 minutes at 4.5s intervals, then give up quietly
        clearInterval(interval);
        return;
      }
      try {
        await supabase.auth.refreshSession();
      } catch {
        // Ignore — just means nothing's changed yet, or the session
        // genuinely can't refresh right now. Next tick tries again.
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [status]);

  // Let the parent (Paywall/BundlePromo) know a link went out, and to
  // whom + which path — it's the one that owns titleId/bundle context,
  // so it's the one that can actually start the cross-device email check.
  useEffect(() => {
    if (status === 'sent') onLinkSent?.(email, mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // The purchase already happened (that's what got us here) — this link
  // is only to get THIS device signed in, never to buy again. Strip
  // autoPurchase so App.jsx's auto-checkout effect doesn't fire a second,
  // needless (or worse, double-charging) checkout once this device lands
  // back on the book already owned.
  const handleResend = async () => {
    setResendState('sending');
    const { error: resendError } = await crossDevice.resendForThisDevice(stripAutoPurchaseParam(redirectPath));
    setResendState(resendError ? 'error' : 'sent');
  };

  // The email turned out to already belong to an existing account, and
  // that account's purchase has now been confirmed by
  // useCrossDeviceEmailCheck — but confirmed on WHICHEVER device clicked
  // the first link, not this one. This device's own session is still
  // anonymous, so it genuinely can't read that purchase (RLS is right to
  // refuse it). Getting signed in here for real needs a same-device
  // link, which — unlike the first one — is guaranteed to work, since
  // request and click both happen in this one browser.
  if (crossDevice?.confirmed) {
    return (
      <div style={{ textAlign: compact ? 'left' : 'center' }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: compact ? 15 : 18, margin: '0 0 6px' }}>
          Purchase confirmed
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.5 }}>
          It's on your account — this device just isn't signed in yet.
        </p>
        {resendState === 'sent' ? (
          <p style={{ fontSize: 13, color: 'var(--ink-dim)', marginTop: 10 }}>
            Check <strong style={{ color: 'var(--ink)' }}>{email}</strong> on this device and click the link — it'll drop you right back here, unlocked.
          </p>
        ) : (
          <button
            onClick={handleResend}
            className={compact ? 'narrator-btn' : 'btn-primary'}
            disabled={resendState === 'sending'}
          >
            {resendState === 'sending' ? 'Sending…' : 'Finish signing in on this device'}
          </button>
        )}
        {resendState === 'error' && (
          <p style={{ fontSize: 12, color: 'var(--ember)', marginTop: 10 }}>Couldn't send that — try again in a moment.</p>
        )}
      </div>
    );
  }

  if (status === 'sent') {
    return (
      <div style={{ textAlign: compact ? 'left' : 'center' }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: compact ? 15 : 18, margin: '0 0 6px' }}>
          Check your inbox
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.5 }}>
          {mode === 'signin'
            ? <>That email already has an account — we sent a sign-in link to <strong style={{ color: 'var(--ink)' }}>{email}</strong>.</>
            : <>We sent a link to <strong style={{ color: 'var(--ink)' }}>{email}</strong> — click it to continue.</>}
        </p>
        <p style={{ fontSize: 12, color: 'var(--ink-dim)', marginTop: 10, fontStyle: 'italic' }}>
          {mode === 'signin'
            ? "If you open it on a different device, come back to this tab afterward — we'll confirm the purchase here and get this device signed in too."
            : "This page will update on its own once you've clicked it — even if you check your email on a different device."}
        </p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: compact ? 'left' : 'center' }}>
      {heading && (
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: compact ? 15 : 18, margin: '0 0 6px' }}>
          {heading}
        </p>
      )}
      {description && (
        <p style={{ fontSize: 13, color: 'var(--ink-dim)', marginBottom: 14, lineHeight: 1.5 }}>
          {description}
        </p>
      )}
      <form
        onSubmit={(e) => { e.preventDefault(); sendAuthLink(email, redirectPath); }}
        style={{ display: 'flex', gap: 8, flexWrap: compact ? 'nowrap' : 'wrap' }}
      >
        <input
          type="email"
          required
          aria-label="Email address"
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1, minWidth: 140, background: 'var(--surface-raised)',
            border: '1px solid var(--border)', borderRadius: 6,
            padding: '10px 12px', color: 'var(--ink)', fontSize: 14,
          }}
        />
        <button
          type="submit"
          className={compact ? 'narrator-btn' : 'btn-primary'}
          style={compact ? {} : { flex: '1 1 100%' }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Continue'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ fontSize: 12, color: 'var(--ember)', marginTop: 10 }}>{error}</p>
      )}
    </div>
  );
}

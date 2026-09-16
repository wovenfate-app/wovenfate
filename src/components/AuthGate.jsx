import { useState, useEffect, useRef } from 'react';
import { useEmailAuth } from '../engine/useEmailAuth.js';
import { supabase } from '../data/supabaseClient.js';

export function AuthGate({ heading, description, redirectPath, compact }) {
  const [email, setEmail] = useState('');
  const { status, error, mode, sendAuthLink } = useEmailAuth();
  const pollCountRef = useRef(0);

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
          This page will update on its own once you've clicked it — even if you check your email on a different device.
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
          className={compact ? 'narrator-btn' : 'choice-btn'}
          style={compact ? {} : { fontWeight: 600, flex: '1 1 100%' }}
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

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../data/supabaseClient.js';
import { AuthGate } from './AuthGate.jsx';
import { normalizeCode, redeemMessage, stripRedeemParam } from '../engine/giftCodes.js';

/**
 * "Have a code?" — redeems a gift code (e.g. one sent to a creator), which
 * unlocks every paid book. Collapsed to a link until opened. A code in the
 * page's ?redeem= link opens it pre-filled, and redeems straight away once
 * the reader has a saved account; an anonymous reader is asked to save one
 * first (AuthGate), and the magic link brings them back to ?redeem=CODE.
 */
export function RedeemCode({ isAnonymous, initialCode, onRedeemed, compact }) {
  const [open, setOpen] = useState(!!initialCode);
  const [code, setCode] = useState(initialCode || '');
  const [state, setState] = useState('idle'); // idle | redeeming | done | error | needs_account
  const [message, setMessage] = useState('');
  const autoTried = useRef(false);

  const redeem = async (raw = code) => {
    const clean = normalizeCode(raw);
    if (clean.length < 4) return;
    if (isAnonymous) { setState('needs_account'); return; }
    setState('redeeming');
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const { data, error } = await supabase.functions.invoke('redeem-gift-code', {
        body: { code: clean },
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (error) throw error;
      const status = data?.status || 'error';
      if (status === 'sign_in_required') { setState('needs_account'); return; }
      setMessage(redeemMessage(status));
      const unlocked = status === 'ok' || status === 'already_redeemed';
      setState(unlocked ? 'done' : 'error');
      if (unlocked) {
        window.history.replaceState({}, '', window.location.pathname + stripRedeemParam(window.location.search));
        onRedeemed?.(status);
      }
    } catch (err) {
      console.error('Redeem failed:', err.message);
      setMessage(redeemMessage('error'));
      setState('error');
    }
  };

  // A ?redeem= link redeems itself once the reader is signed in.
  useEffect(() => {
    if (initialCode && !isAnonymous && !autoTried.current) {
      autoTried.current = true;
      redeem(initialCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCode, isAnonymous]);

  const wrap = (children) => (
    <div className={compact ? 'redeem-code' : 'page redeem-code'} style={{ textAlign: 'center' }}>{children}</div>
  );

  if (state === 'done') {
    return wrap(<p style={{ margin: 0, fontSize: 14, color: 'var(--violet)' }}>{message}</p>);
  }

  if (state === 'needs_account') {
    return wrap(
      <>
        <AuthGate
          heading="Save your account to use your code"
          description="Your code unlocks every book. Saving your account keeps them yours on any device. No password needed."
          redirectPath={`${window.location.pathname}?redeem=${encodeURIComponent(normalizeCode(code))}`}
          compact={compact}
        />
        <button className="btn-link" onClick={() => setState('idle')} style={{ marginTop: 12 }}>Never mind</button>
      </>
    );
  }

  if (!open) {
    // Just a quiet link under the bundle until someone needs it.
    return (
      <div className="redeem-code" style={{ textAlign: 'center', marginTop: compact ? 0 : 14 }}>
        <button className="btn-link" onClick={() => setOpen(true)} style={{ fontSize: 13 }}>Have a code?</button>
      </div>
    );
  }

  return wrap(
    <form onSubmit={(e) => { e.preventDefault(); redeem(); }} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
      <label htmlFor="redeem-code-input" style={{ fontSize: 13, color: 'var(--ink-dim)' }}>
        Enter your code to unlock every book
      </label>
      <div style={{ display: 'flex', gap: 8, width: '100%', maxWidth: 360 }}>
        <input
          id="redeem-code-input"
          value={code}
          onChange={(e) => { setCode(e.target.value); if (state === 'error') setState('idle'); }}
          placeholder="e.g. EMBER-7K3Q9P"
          autoCapitalize="characters"
          autoComplete="off"
          spellCheck={false}
          // Same look as AuthGate's email field.
          style={{
            flex: 1, minWidth: 0, textTransform: 'uppercase', background: 'var(--surface-raised)',
            border: '1px solid var(--border)', borderRadius: 6, padding: '10px 12px', color: 'var(--ink)', fontSize: 14,
          }}
        />
        <button type="submit" className="btn-secondary" disabled={state === 'redeeming' || normalizeCode(code).length < 4} style={{ width: 'auto', padding: '0 18px' }}>
          {state === 'redeeming' ? 'Checking…' : 'Redeem'}
        </button>
      </div>
      {state === 'error' && <p role="alert" style={{ fontSize: 13, color: 'var(--ember)', margin: 0 }}>{message}</p>}
    </form>
  );
}

import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../data/supabaseClient.js';

/**
 * Covers the one case the original id-based cross-device polling
 * (usePurchase / useBundlePurchase's `waitingForLink` effects) cannot:
 * the reader's email already belongs to an existing account.
 *
 * When that happens, useEmailAuth falls back from `updateUser` (which
 * upgrades THIS device's anonymous session in place, keeping the same
 * user id across devices) to `signInWithOtp` (which signs whichever
 * device confirms the link into that EXISTING, DIFFERENT user id). The
 * waiting device's own session never changes — it's still the original
 * anonymous id — so polling `purchases` by *its* user_id can never see a
 * purchase recorded under the other, correct one. This hook polls by
 * email instead (via the check-purchase-status Edge Function, since the
 * client has no way to look up a user by email directly), and once
 * confirmed, exposes a way to resend a same-device sign-in link — which
 * always works, since request and confirmation then happen in the same
 * browser, avoiding the cross-device case entirely for that second link.
 *
 * Deliberately does NOT try to silently reveal the purchased content —
 * this device's session genuinely isn't the account that bought it, and
 * RLS is right to refuse it read access. The honest fix is getting this
 * device signed into the real account, not working around the row-level
 * security protecting it.
 */
export function useCrossDeviceEmailCheck({ email, active, titleId, bundle }) {
  const [confirmed, setConfirmed] = useState(false);
  const emailRef = useRef(email);
  emailRef.current = email;
  const confirmedRef = useRef(false);

  useEffect(() => {
    confirmedRef.current = false;
    setConfirmed(false);
    if (!active || !email) return;

    let attempts = 0;
    const interval = setInterval(async () => {
      if (confirmedRef.current) { clearInterval(interval); return; }
      attempts += 1;
      if (attempts > 40) { clearInterval(interval); return; } // ~3 minutes, then give up quietly

      try {
        const { data: { session } } = await supabase.auth.getSession();
        const { data, error } = await supabase.functions.invoke('check-purchase-status', {
          body: { email: emailRef.current, titleId, bundle },
          headers: session ? { Authorization: `Bearer ${session.access_token}` } : undefined,
        });
        if (!error && data?.purchased) {
          confirmedRef.current = true;
          setConfirmed(true);
        }
      } catch {
        // Best-effort, same as the sibling polling loops — next tick retries.
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [active, email, titleId, bundle]);

  // Same emailRedirectTo convention as useEmailAuth.sendAuthLink, so this
  // second link lands the reader back on the exact book/checkout state —
  // not just wherever the bare URL happens to be — once it's clicked.
  const resendForThisDevice = useCallback(async (redirectPath) => {
    if (!emailRef.current) return { error: 'No email on file.' };
    const emailRedirectTo = redirectPath
      ? `${window.location.origin}${redirectPath}`
      : window.location.href;
    const { error } = await supabase.auth.signInWithOtp({
      email: emailRef.current,
      options: { emailRedirectTo },
    });
    return { error: error?.message };
  }, []);

  return { confirmed, resendForThisDevice };
}

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../data/supabaseClient.js';
import { pendingConsentFor, clearPendingConsent, consentRow } from './emailConsent.js';

/**
 * The signed-in reader's "email me about new books" choice. Guests have
 * no choice to make (optedIn stays null). On sign-in, a pending opt-in
 * ticked on this device for this exact email is recorded (see
 * emailConsent.js for why it waits until now).
 */
export function useEmailConsent(user) {
  const [optedIn, setOptedInState] = useState(null); // null = guest / not loaded
  const [saving, setSaving] = useState(false);
  const signedIn = !!user && !user.is_anonymous && !!user.email;

  useEffect(() => {
    if (!signedIn) { setOptedInState(null); return; }
    let cancelled = false;
    (async () => {
      const pending = pendingConsentFor(window.localStorage, user.email);
      if (pending) {
        const { error } = await supabase.from('email_consent')
          .upsert(consentRow({ userId: user.id, email: user.email, optedIn: true, source: 'save_account' }));
        if (!error) clearPendingConsent(window.localStorage);
      }
      const { data } = await supabase.from('email_consent').select('opted_in').eq('user_id', user.id).maybeSingle();
      if (!cancelled) setOptedInState(!!data?.opted_in);
    })().catch((err) => console.error('Email consent check failed:', err.message));
    return () => { cancelled = true; };
  }, [signedIn, user?.id, user?.email]);

  const setOptedIn = useCallback(async (value) => {
    if (!signedIn) return;
    setSaving(true);
    const { error } = await supabase.from('email_consent')
      .upsert(consentRow({ userId: user.id, email: user.email, optedIn: value, source: 'account_settings' }));
    setSaving(false);
    if (error) { console.error('Saving email preference failed:', error.message); return; }
    setOptedInState(value);
  }, [signedIn, user?.id, user?.email]);

  return { optedIn, setOptedIn, saving };
}

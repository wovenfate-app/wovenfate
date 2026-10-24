/**
 * Optional "email me about new books" consent: the pure parts, kept free
 * of React and Supabase so they're testable (useEmailConsent.js is the
 * side-effecting wrapper).
 *
 * A reader ticks the box while saving their account, but at that moment
 * they aren't yet signed in as that email: the magic link still has to be
 * clicked, possibly on another device, and an existing email signs into a
 * different account altogether. So the opt-in is held on this device as
 * "pending" and only written to the database once the session is signed
 * in as exactly that email.
 */

// The exact words shown next to the checkbox. Stored with every consent
// record, so there's proof of what the reader agreed to.
export const CONSENT_WORDING =
  'Email me when new books come out (no more than twice a month). Unsubscribe any time.';

const PENDING_KEY = 'wf-pending-email-consent';
const PENDING_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // a link left unclicked for a week doesn't count

const normalise = (email) => String(email || '').trim().toLowerCase();

export function savePendingConsent(storage, email, now = Date.now()) {
  try {
    storage.setItem(PENDING_KEY, JSON.stringify({ email: normalise(email), at: now }));
  } catch { /* storage blocked (private mode): the reader can still opt in from their account */ }
}

export function clearPendingConsent(storage) {
  try { storage.removeItem(PENDING_KEY); } catch { /* nothing to clear */ }
}

/** The pending opt-in for this signed-in email, if there is a fresh one. */
export function pendingConsentFor(storage, email, now = Date.now()) {
  let pending;
  try { pending = JSON.parse(storage.getItem(PENDING_KEY) || 'null'); } catch { return null; }
  if (!pending || !pending.email || pending.email !== normalise(email)) return null;
  if (!(now - pending.at < PENDING_MAX_AGE_MS)) return null;
  return pending;
}

/** The row to upsert into email_consent for an opt-in or opt-out. */
export function consentRow({ userId, email, optedIn, source, now = new Date() }) {
  const at = now.toISOString();
  return {
    user_id: userId,
    email: normalise(email),
    opted_in: optedIn,
    wording: CONSENT_WORDING,
    source,
    ...(optedIn ? { consented_at: at, withdrawn_at: null } : { withdrawn_at: at }),
    updated_at: at,
  };
}

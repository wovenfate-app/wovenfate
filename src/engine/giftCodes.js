// Gift codes on the client: tidying what the reader typed, reading a code
// from a ?redeem= link, and the message for each redeem result. The real
// checks happen server-side (redeem-gift-code edge function).

/** Upper-cases and strips spaces, so "ember abc 123" and "EMBER-ABC123" style typos still match. */
export function normalizeCode(input = '') {
  return input.toUpperCase().replace(/\s+/g, '');
}

/** The code in a `?redeem=CODE` link (what creators are sent), or null. */
export function codeFromSearch(search = '') {
  const code = new URLSearchParams(search).get('redeem');
  return code ? normalizeCode(code) : null;
}

/** Removes `redeem` from a query string, keeping anything else. */
export function stripRedeemParam(search = '') {
  const params = new URLSearchParams(search);
  params.delete('redeem');
  const rest = params.toString();
  return rest ? `?${rest}` : '';
}

const MESSAGES = {
  ok: 'Unlocked! Every book is yours to read in full. Happy reading.',
  already_redeemed: "You've already used this code, so every book is already unlocked on your account.",
  invalid: "That code isn't recognised. Check it and try again.",
  expired: 'That code has expired.',
  used_up: 'That code has already been used.',
  sign_in_required: 'Save your account first so the unlock is never lost.',
  error: 'Something went wrong. Try again in a moment.',
};

export function redeemMessage(status) {
  return MESSAGES[status] || MESSAGES.error;
}

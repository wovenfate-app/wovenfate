/**
 * Strips `autoPurchase` from a redirect path (e.g. `/?title=x&autoPurchase=single`).
 *
 * Used specifically when AuthGate resends a same-device sign-in link
 * after a purchase has already been confirmed elsewhere (see
 * useCrossDeviceEmailCheck): the reader already bought it, so the
 * redirect back must NOT carry `autoPurchase`, or App.jsx's auto-checkout
 * effect fires a second, needless — or worse, double-charging — checkout
 * the moment this device lands back on the book.
 *
 * Pure string/query manipulation only (URLSearchParams, no DOM `URL`
 * needed) so this is testable without a browser environment.
 */
export function stripAutoPurchaseParam(path) {
  if (!path) return path;
  const [pathname, search = ''] = path.split('?');
  const params = new URLSearchParams(search);
  params.delete('autoPurchase');
  const remaining = params.toString();
  return remaining ? `${pathname}?${remaining}` : pathname;
}

/**
 * Decides what App.jsx's auto-checkout effect should do with a
 * `?autoPurchase=single|bundle` redirect, given what's currently known
 * about ownership.
 *
 * Why this needs to exist at all: Paywall/BundlePromo send the *original*
 * magic link with autoPurchase still in the redirect, because at send-time
 * there's no way yet to know whether this email belongs to an account that
 * already owns the title/bundle (see useEmailAuth.js's "already
 * registered" fallback). If that email does turn out to belong to an
 * existing owner, clicking the link signs them into that real account —
 * and firing checkout unconditionally at that point would charge them a
 * second time. stripAutoPurchaseParam (above) covers the *other* half of
 * this: the same-device resend link sent once useCrossDeviceEmailCheck has
 * already confirmed ownership. This function covers the reader who clicks
 * straight through the original link instead of waiting for that.
 *
 * Pulled out as pure logic (rather than left inline in the effect) so this
 * don't-double-charge rule is unit-testable without a DOM/React harness.
 *
 * @param {string|null} autoPurchase - the raw `autoPurchase` URL param.
 * @param {{ isUnlocked?: boolean, hasFullLibrary?: boolean }} ownership -
 *   current ownership state from usePurchase/useBundlePurchase. Both
 *   report `undefined` while still checking.
 * @returns {'wait'|'skip'|'single'|'bundle'|null}
 *   'wait'   — ownership isn't known yet; don't decide anything yet
 *              (and don't strip the URL param) until it resolves.
 *   'skip'   — already owned; strip the param but don't start checkout.
 *   'single'|'bundle' — not owned yet; go ahead and start checkout.
 *   null     — no autoPurchase param, or an unrecognized value.
 */
export function resolveAutoPurchaseAction(autoPurchase, { isUnlocked, hasFullLibrary } = {}) {
  if (autoPurchase === 'single') {
    if (isUnlocked === undefined) return 'wait';
    return isUnlocked ? 'skip' : 'single';
  }
  if (autoPurchase === 'bundle') {
    if (hasFullLibrary === undefined) return 'wait';
    return hasFullLibrary ? 'skip' : 'bundle';
  }
  return null;
}

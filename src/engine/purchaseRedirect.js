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

// Pure URL <-> screen mapping for the app's three screens, split out so
// it's unit-testable without a DOM (same approach as coverGate.js).
//
//   /                 landing page
//   /book/:titleId    a title's cover/details page
//   /read/:titleId    reading that title
//
// Real paths (rather than one "/" for everything) are what make the
// browser/phone back button step between screens instead of leaving the
// site, and give every book a link that can be shared or indexed.
//
// The legacy query form — /?title=x, used by Stripe's success/cancel URLs
// and the post-sign-in autoPurchase links — still opens that title
// straight into reading, exactly as before.

const TITLE_ID = /^[a-z0-9-]+$/;

/**
 * @returns {{ view: 'landing' } | { view: 'book' | 'read', titleId: string, legacy?: boolean } | { view: 'notfound' }}
 */
export function parseRoute(pathname, search = '') {
  const path = (pathname || '/').replace(/\/+$/, '') || '/';

  if (path === '/' || path === '/index.html') {
    const legacyTitle = new URLSearchParams(search).get('title');
    if (legacyTitle && TITLE_ID.test(legacyTitle)) {
      return { view: 'read', titleId: legacyTitle, legacy: true };
    }
    return { view: 'landing' };
  }

  const match = path.match(/^\/(book|read)\/([^/]+)$/);
  if (match && TITLE_ID.test(match[2])) {
    return { view: match[1], titleId: match[2] };
  }

  return { view: 'notfound' };
}

/** The canonical path for a route (the inverse of parseRoute). */
export function pathFor(route) {
  if (route.view === 'book' || route.view === 'read') return `/${route.view}/${route.titleId}`;
  return '/';
}

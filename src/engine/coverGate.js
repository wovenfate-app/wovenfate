// Pure logic for the title cover page — split out so it's unit-testable
// without a DOM/React harness, matching this project's other tests
// (see purchaseRedirect.js, analyticsEvents.js).

/**
 * Decides whether picking a title should show its cover page first, or
 * skip straight into reading.
 *
 * Clicking a catalog card should show the cover — title, tagline, a
 * "Start/Continue Reading" button — like opening a book to its cover
 * before the first page. But booting straight into a title from a URL
 * (a post-checkout Stripe redirect, or a resume link) means the reader
 * already chose this book by completing checkout or clicking a link;
 * showing the cover in that case would just be an extra click back
 * into content they're already returning to.
 */
export function shouldSkipCoverPage(search) {
  const params = new URLSearchParams(search);
  return !!params.get('title');
}

/** Label for the cover page's single call-to-action button. */
export function getCoverCtaLabel(hasProgress) {
  return hasProgress ? 'Continue Reading' : 'Start Reading';
}

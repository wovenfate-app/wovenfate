// Pure helpers for HScrollRow, split out from the component so the
// scroll-affordance and wheel-hijack logic can be unit-tested without a
// DOM/React test harness (this project's other tests are plain
// node:test on pure functions — see engine/*.test.js).

// A few px of slack so floating-point scroll positions (subpixel zoom,
// browser rounding) don't leave a nav button stuck visible/hidden right
// at the very end of the track.
const EDGE_SLACK_PX = 4;

/**
 * Given a track's current scroll metrics, decide whether the left/right
 * nav buttons should be shown.
 */
export function computeScrollAffordance({ scrollLeft, clientWidth, scrollWidth }) {
  return {
    canScrollLeft: scrollLeft > EDGE_SLACK_PX,
    canScrollRight: scrollLeft + clientWidth < scrollWidth - EDGE_SLACK_PX,
  };
}

/**
 * Decide whether a wheel event on the row should be converted into
 * horizontal scrolling.
 *
 * Plain vertical-wheel mice send only deltaY, so `.hscroll`'s
 * `overflow-x: auto` never receives horizontal input from them — the
 * row silently eats no scroll at all and the page scrolls past it
 * instead, leaving later cards permanently unreachable. Trackpads and
 * mice with horizontal tilt-wheels already send a meaningful deltaX,
 * so we leave those alone and let the browser's native handling apply.
 * We also only hijack when the row actually has somewhere to go, so a
 * fully-visible row never blocks normal page scrolling.
 */
export function shouldHijackWheel({ deltaX, deltaY, scrollWidth, clientWidth }) {
  const hasOverflow = scrollWidth > clientWidth + EDGE_SLACK_PX;
  const isDominantlyVertical = Math.abs(deltaY) > Math.abs(deltaX);
  return hasOverflow && isDominantlyVertical && deltaY !== 0;
}

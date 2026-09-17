import { useCallback, useEffect, useRef, useState } from 'react';
import { computeScrollAffordance, shouldHijackWheel } from './hscrollUtils.js';

/**
 * Wraps the catalog carousels' `.hscroll` track.
 *
 * `.hscroll` is `overflow-x: auto` with the scrollbar hidden for the
 * mobile-app look. That's fine on touch/trackpad, but a plain desktop
 * mouse wheel only ever sends a vertical delta — with no scrollbar and
 * no drag support, cards past the first ~3.5 were completely
 * unreachable for anyone without a trackpad (the page just scrolled
 * past the row instead). This adds the two things that fix that:
 *   - vertical-wheel -> horizontal-scroll translation while hovered
 *   - explicit prev/next buttons, shown only when there's somewhere to
 *     scroll to, so every card is reachable by click regardless of
 *     input device.
 */
export function HScrollRow({ children, ariaLabel }) {
  const trackRef = useRef(null);
  const [affordance, setAffordance] = useState({ canScrollLeft: false, canScrollRight: false });

  const refreshAffordance = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAffordance(computeScrollAffordance({
      scrollLeft: el.scrollLeft,
      clientWidth: el.clientWidth,
      scrollWidth: el.scrollWidth,
    }));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    refreshAffordance();
    el.addEventListener('scroll', refreshAffordance, { passive: true });
    // Covers cover into view after image load, and viewport resizes.
    const resizeObserver = new ResizeObserver(refreshAffordance);
    resizeObserver.observe(el);
    window.addEventListener('resize', refreshAffordance);
    return () => {
      el.removeEventListener('scroll', refreshAffordance);
      resizeObserver.disconnect();
      window.removeEventListener('resize', refreshAffordance);
    };
    // Re-run when the row's content changes (e.g. titles finish loading).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshAffordance, children]);

  const handleWheel = useCallback((event) => {
    const el = trackRef.current;
    if (!el) return;
    if (shouldHijackWheel({
      deltaX: event.deltaX,
      deltaY: event.deltaY,
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
    })) {
      el.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  }, []);

  const scrollByPage = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.round(el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <div className="hscroll-row">
      {affordance.canScrollLeft && (
        <button
          type="button"
          className="hscroll-nav hscroll-nav-left"
          onClick={() => scrollByPage(-1)}
          aria-label={`Scroll ${ariaLabel ?? 'row'} left`}
        >
          ‹
        </button>
      )}
      <div className="hscroll" ref={trackRef} onWheel={handleWheel} role="group" aria-label={ariaLabel}>
        {children}
      </div>
      {affordance.canScrollRight && (
        <button
          type="button"
          className="hscroll-nav hscroll-nav-right"
          onClick={() => scrollByPage(1)}
          aria-label={`Scroll ${ariaLabel ?? 'row'} right`}
        >
          ›
        </button>
      )}
    </div>
  );
}

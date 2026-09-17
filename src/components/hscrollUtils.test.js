import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeScrollAffordance, shouldHijackWheel } from './hscrollUtils.js';

test('computeScrollAffordance hides both arrows when the row fits entirely', () => {
  const { canScrollLeft, canScrollRight } = computeScrollAffordance({
    scrollLeft: 0, clientWidth: 600, scrollWidth: 600,
  });
  assert.equal(canScrollLeft, false);
  assert.equal(canScrollRight, false);
});

test('computeScrollAffordance shows only the right arrow at the start of an overflowing row', () => {
  const { canScrollLeft, canScrollRight } = computeScrollAffordance({
    scrollLeft: 0, clientWidth: 600, scrollWidth: 1400,
  });
  assert.equal(canScrollLeft, false);
  assert.equal(canScrollRight, true);
});

test('computeScrollAffordance shows only the left arrow at the end of the row', () => {
  const { canScrollLeft, canScrollRight } = computeScrollAffordance({
    scrollLeft: 800, clientWidth: 600, scrollWidth: 1400,
  });
  assert.equal(canScrollLeft, true);
  assert.equal(canScrollRight, false);
});

test('computeScrollAffordance shows both arrows in the middle of the row', () => {
  const { canScrollLeft, canScrollRight } = computeScrollAffordance({
    scrollLeft: 400, clientWidth: 600, scrollWidth: 1400,
  });
  assert.equal(canScrollLeft, true);
  assert.equal(canScrollRight, true);
});

test('computeScrollAffordance treats a few px of slack at either edge as "there"', () => {
  const nearStart = computeScrollAffordance({ scrollLeft: 2, clientWidth: 600, scrollWidth: 1400 });
  assert.equal(nearStart.canScrollLeft, false);
  const nearEnd = computeScrollAffordance({ scrollLeft: 798, clientWidth: 600, scrollWidth: 1400 });
  assert.equal(nearEnd.canScrollRight, false);
});

test('shouldHijackWheel converts a plain vertical mouse wheel when the row overflows', () => {
  assert.equal(
    shouldHijackWheel({ deltaX: 0, deltaY: 80, scrollWidth: 1400, clientWidth: 600 }),
    true,
  );
});

test('shouldHijackWheel leaves a fully-visible row alone so the page can still scroll', () => {
  assert.equal(
    shouldHijackWheel({ deltaX: 0, deltaY: 80, scrollWidth: 600, clientWidth: 600 }),
    false,
  );
});

test('shouldHijackWheel leaves trackpad horizontal gestures to native handling', () => {
  assert.equal(
    shouldHijackWheel({ deltaX: 60, deltaY: 5, scrollWidth: 1400, clientWidth: 600 }),
    false,
  );
});

test('shouldHijackWheel does nothing on a zero-delta wheel event', () => {
  assert.equal(
    shouldHijackWheel({ deltaX: 0, deltaY: 0, scrollWidth: 1400, clientWidth: 600 }),
    false,
  );
});

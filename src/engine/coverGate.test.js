import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shouldSkipCoverPage, getCoverCtaLabel } from './coverGate.js';

test('shouldSkipCoverPage skips the cover when a title is already in the URL', () => {
  assert.equal(shouldSkipCoverPage('?title=ember-court'), true);
  assert.equal(shouldSkipCoverPage('?title=ember-court&autoPurchase=single'), true);
});

test('shouldSkipCoverPage shows the cover on a plain landing-page visit', () => {
  assert.equal(shouldSkipCoverPage(''), false);
  assert.equal(shouldSkipCoverPage('?checkout=success'), false);
});

test('getCoverCtaLabel matches the reader\'s progress state', () => {
  assert.equal(getCoverCtaLabel(true), 'Continue Reading');
  assert.equal(getCoverCtaLabel(false), 'Start Reading');
});

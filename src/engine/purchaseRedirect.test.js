import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stripAutoPurchaseParam, resolveAutoPurchaseAction } from './purchaseRedirect.js';

test('removes autoPurchase when it is the only param', () => {
  assert.equal(stripAutoPurchaseParam('/?autoPurchase=bundle'), '/');
});

test('removes autoPurchase while preserving sibling params', () => {
  assert.equal(stripAutoPurchaseParam('/?title=ember-court&autoPurchase=single'), '/?title=ember-court');
});

test('preserves param order and other params when autoPurchase is in the middle', () => {
  assert.equal(
    stripAutoPurchaseParam('/?title=ember-court&autoPurchase=single&ref=paywall'),
    '/?title=ember-court&ref=paywall'
  );
});

test('is a no-op when autoPurchase is absent', () => {
  assert.equal(stripAutoPurchaseParam('/?title=ember-court'), '/?title=ember-court');
});

test('handles a bare path with no query string', () => {
  assert.equal(stripAutoPurchaseParam('/'), '/');
});

test('passes through null/undefined unchanged', () => {
  assert.equal(stripAutoPurchaseParam(null), null);
  assert.equal(stripAutoPurchaseParam(undefined), undefined);
  assert.equal(stripAutoPurchaseParam(''), '');
});

// resolveAutoPurchaseAction — the double-charge guard for App.jsx's
// auto-checkout effect. The case this exists for: an "already registered"
// email (see useEmailAuth.js) can click straight through the original
// magic link — still carrying autoPurchase — into an account that already
// owns the title/bundle. Checkout must not fire in that case.

test('single: waits while ownership is still unknown', () => {
  assert.equal(resolveAutoPurchaseAction('single', { isUnlocked: undefined }), 'wait');
});

test('single: skips checkout when already unlocked (the double-charge case)', () => {
  assert.equal(resolveAutoPurchaseAction('single', { isUnlocked: true }), 'skip');
});

test('single: proceeds to checkout when genuinely not yet owned', () => {
  assert.equal(resolveAutoPurchaseAction('single', { isUnlocked: false }), 'single');
});

test('bundle: waits while ownership is still unknown', () => {
  assert.equal(resolveAutoPurchaseAction('bundle', { hasFullLibrary: undefined }), 'wait');
});

test('bundle: skips checkout when the full library is already owned', () => {
  assert.equal(resolveAutoPurchaseAction('bundle', { hasFullLibrary: true }), 'skip');
});

test('bundle: proceeds to checkout when the library is not yet complete', () => {
  assert.equal(resolveAutoPurchaseAction('bundle', { hasFullLibrary: false }), 'bundle');
});

test('returns null for a missing or unrecognized autoPurchase value', () => {
  assert.equal(resolveAutoPurchaseAction(null, { isUnlocked: false, hasFullLibrary: false }), null);
  assert.equal(resolveAutoPurchaseAction('', { isUnlocked: false, hasFullLibrary: false }), null);
  assert.equal(resolveAutoPurchaseAction('garbage', { isUnlocked: false, hasFullLibrary: false }), null);
});

test('defaults ownership to undefined (waits) when the second argument is omitted', () => {
  assert.equal(resolveAutoPurchaseAction('single'), 'wait');
  assert.equal(resolveAutoPurchaseAction('bundle'), 'wait');
});

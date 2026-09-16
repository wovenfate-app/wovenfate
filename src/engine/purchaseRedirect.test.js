import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stripAutoPurchaseParam } from './purchaseRedirect.js';

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

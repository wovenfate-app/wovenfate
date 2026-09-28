import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isFreeTitle, paidTitles, ownsFullLibrary, nextTitleSuggestions } from './pricing.js';

const catalog = [
  { id: 'ember-court', price_cents: 0 },
  { id: 'binding-oath', price_cents: 299 },
  { id: 'salt-and-drowning', price_cents: 299 },
  { id: 'wardens-heir', price_cents: 299 },
  { id: 'ashbound', price_cents: 299 },
];

test('a zero price means free; a missing title or missing price does not', () => {
  assert.equal(isFreeTitle(catalog[0]), true);
  assert.equal(isFreeTitle(catalog[1]), false);
  assert.equal(isFreeTitle(undefined), false);
  assert.equal(isFreeTitle({ id: 'x' }), false);
});

test('the bundle covers only the paid titles', () => {
  assert.deepEqual(paidTitles(catalog).map((t) => t.id), ['binding-oath', 'salt-and-drowning', 'wardens-heir', 'ashbound']);
});

test('owning every paid title is the full library, whether or not the free one was ever bought', () => {
  const paidIds = new Set(['binding-oath', 'salt-and-drowning', 'wardens-heir', 'ashbound']);
  assert.equal(ownsFullLibrary(catalog, paidIds), true);
  assert.equal(ownsFullLibrary(catalog, new Set([...paidIds, 'ember-court'])), true);
  assert.equal(ownsFullLibrary(catalog, new Set(['ember-court', 'binding-oath'])), false);
  assert.equal(ownsFullLibrary([], new Set()), false);
});

test('suggestions after an ending skip the current, owned and free titles', () => {
  const owned = new Set(['binding-oath']);
  assert.deepEqual(nextTitleSuggestions(catalog, 'ember-court', owned).map((t) => t.id), ['salt-and-drowning', 'wardens-heir']);
  assert.deepEqual(nextTitleSuggestions(catalog, 'salt-and-drowning', owned, 5).map((t) => t.id), ['wardens-heir', 'ashbound']);
});

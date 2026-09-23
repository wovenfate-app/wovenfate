import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseRoute, pathFor } from './routes.js';

test('parseRoute maps the root to the landing page', () => {
  assert.deepEqual(parseRoute('/'), { view: 'landing' });
  assert.deepEqual(parseRoute(''), { view: 'landing' });
  assert.deepEqual(parseRoute('/index.html'), { view: 'landing' });
});

test('parseRoute maps /book/:id and /read/:id, tolerating a trailing slash', () => {
  assert.deepEqual(parseRoute('/book/ember-court'), { view: 'book', titleId: 'ember-court' });
  assert.deepEqual(parseRoute('/read/ashbound/'), { view: 'read', titleId: 'ashbound' });
});

test('parseRoute keeps the legacy ?title= form (Stripe + sign-in redirects) opening straight into reading', () => {
  assert.deepEqual(
    parseRoute('/', '?checkout=success&title=salt-and-drowning'),
    { view: 'read', titleId: 'salt-and-drowning', legacy: true },
  );
  // A bundle checkout return has no title — that's the landing page.
  assert.deepEqual(parseRoute('/', '?checkout=success&bundle=true'), { view: 'landing' });
});

test('parseRoute sends anything else to notfound', () => {
  assert.deepEqual(parseRoute('/some-typo'), { view: 'notfound' });
  assert.deepEqual(parseRoute('/book'), { view: 'notfound' });
  assert.deepEqual(parseRoute('/book/Ember Court'), { view: 'notfound' });
  assert.deepEqual(parseRoute('/book/a/b'), { view: 'notfound' });
});

test('pathFor is the inverse of parseRoute', () => {
  for (const path of ['/', '/book/ember-court', '/read/wardens-heir']) {
    assert.equal(pathFor(parseRoute(path)), path);
  }
  assert.equal(pathFor({ view: 'notfound' }), '/');
});

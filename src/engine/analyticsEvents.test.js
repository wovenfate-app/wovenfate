import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildEvent, createEventQueue } from './analyticsEvents.js';

test('buildEvent shapes a valid event with sane defaults', () => {
  const event = buildEvent('chapter_viewed', { titleId: 'ember-court', payload: { node_id: 'n3' } });
  assert.equal(event.event_type, 'chapter_viewed');
  assert.equal(event.title_id, 'ember-court');
  assert.equal(event.user_id, null); // no userId passed
  assert.deepEqual(event.payload, { node_id: 'n3' });
  assert.match(event.client_ts, /^\d{4}-\d{2}-\d{2}T/);
});

test('buildEvent rejects an unknown event type', () => {
  assert.throws(() => buildEvent('reader_sneezed', {}), /Unknown analytics event type/);
});

test('buildEvent sanitizes oversized strings, non-primitives, and undefined', () => {
  const event = buildEvent('choice_made', {
    payload: {
      choice_label: 'x'.repeat(500),
      nested: { a: 1 },
      count: 3,
      flag: true,
      broken: undefined,
    },
  });
  assert.equal(event.payload.choice_label.length, 200);
  assert.equal(typeof event.payload.nested, 'string'); // stringified, not thrown or dropped
  assert.equal(event.payload.count, 3);
  assert.equal(event.payload.flag, true);
  assert.equal('broken' in event.payload, false);
});

test('buildEvent caps payloads at 8 keys', () => {
  const bigPayload = Object.fromEntries(Array.from({ length: 12 }, (_, i) => [`k${i}`, i]));
  const event = buildEvent('chapter_viewed', { payload: bigPayload });
  assert.equal(Object.keys(event.payload).length, 8);
});

test('buildEvent never throws on a garbage payload shape', () => {
  assert.doesNotThrow(() => buildEvent('chapter_viewed', { payload: 'not an object' }));
  assert.doesNotThrow(() => buildEvent('chapter_viewed', { payload: null }));
});

test('event queue reports shouldFlush once it reaches flushSize', () => {
  const queue = createEventQueue({ flushSize: 3, maxSize: 10 });
  queue.add({ a: 1 });
  queue.add({ a: 2 });
  assert.equal(queue.shouldFlush(), false);
  queue.add({ a: 3 });
  assert.equal(queue.shouldFlush(), true);
  assert.equal(queue.size, 3);
});

test('event queue drains and empties itself', () => {
  const queue = createEventQueue();
  queue.add({ a: 1 });
  const drained = queue.drain();
  assert.deepEqual(drained, [{ a: 1 }]);
  assert.equal(queue.size, 0);
});

test('event queue drops oldest events past maxSize instead of growing unbounded', () => {
  const queue = createEventQueue({ maxSize: 3, flushSize: 100 });
  for (let i = 0; i < 5; i++) queue.add({ i });
  assert.equal(queue.size, 3);
  assert.deepEqual(queue.drain().map((e) => e.i), [2, 3, 4]);
});

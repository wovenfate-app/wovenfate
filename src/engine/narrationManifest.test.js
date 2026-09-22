import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  manifestUrlFor,
  audioUrlFor,
  manifestMatchesQueue,
  buildAudioQueue,
  isRealNarrationBackend,
} from './narrationManifest.js';

test('manifestUrlFor and audioUrlFor point under the title\'s /narration folder', () => {
  assert.equal(manifestUrlFor('ember-court'), '/narration/ember-court/manifest.json');
  assert.equal(audioUrlFor('ember-court', 'n1/001-char.mp3'), '/narration/ember-court/n1/001-char.mp3');
});

test('manifestMatchesQueue is true only when entry count matches the queue exactly', () => {
  const queue = [{ speaker: 'narrator', text: 'a' }, { speaker: 'his', text: 'b' }];
  assert.equal(manifestMatchesQueue([{ base: 'x' }, { base: 'y' }], queue), true);
  assert.equal(manifestMatchesQueue([{ base: 'x' }], queue), false); // story edited, audio not regenerated
  assert.equal(manifestMatchesQueue([{ base: 'x' }, { base: 'y' }, { base: 'z' }], queue), false);
});

test('manifestMatchesQueue rejects non-array input instead of throwing', () => {
  assert.equal(manifestMatchesQueue(undefined, [{ speaker: 'narrator', text: 'a' }]), false);
  assert.equal(manifestMatchesQueue([{ base: 'x' }], undefined), false);
});

test('buildAudioQueue returns null when the manifest does not match the queue', () => {
  const queue = [{ speaker: 'narrator', text: 'a' }, { speaker: 'his', text: 'b' }];
  assert.equal(buildAudioQueue('ember-court', queue, [{ base: 'n1/000-base.mp3' }], true), null);
});

test('buildAudioQueue uses the base (Adam Stone) clip for narrator segments regardless of the toggle', () => {
  const queue = [{ speaker: 'narrator', text: 'The door creaks.' }];
  const entries = [{ base: 'n1/000-base.mp3' }];
  const on = buildAudioQueue('ember-court', queue, entries, true);
  const off = buildAudioQueue('ember-court', queue, entries, false);
  assert.equal(on[0].src, '/narration/ember-court/n1/000-base.mp3');
  assert.equal(off[0].src, '/narration/ember-court/n1/000-base.mp3');
});

test('buildAudioQueue uses the character clip for a dialogue segment only when the toggle is on', () => {
  const queue = [{ speaker: 'his', text: 'Come with me.' }];
  const entries = [{ base: 'n1/001-base.mp3', char: 'n1/001-char.mp3' }];
  const on = buildAudioQueue('ember-court', queue, entries, true);
  const off = buildAudioQueue('ember-court', queue, entries, false);
  assert.equal(on[0].src, '/narration/ember-court/n1/001-char.mp3');
  assert.equal(off[0].src, '/narration/ember-court/n1/001-base.mp3');
});

test('buildAudioQueue falls back to the base clip when a dialogue segment has no character clip yet', () => {
  const queue = [{ speaker: 'her', text: 'Wait.' }];
  const entries = [{ base: 'n1/002-base.mp3' }]; // no `char` — e.g. cast not rendered for this title yet
  const on = buildAudioQueue('ember-court', queue, entries, true);
  assert.equal(on[0].src, '/narration/ember-court/n1/002-base.mp3');
});

test('buildAudioQueue returns null when a segment has no usable clip at all', () => {
  const queue = [{ speaker: 'narrator', text: 'Missing audio.' }];
  const entries = [{}];
  assert.equal(buildAudioQueue('ember-court', queue, entries, false), null);
});

test('isRealNarrationBackend is true only for the elevenlabs backend, never the silence placeholder or no manifest', () => {
  assert.equal(isRealNarrationBackend('elevenlabs'), true);
  assert.equal(isRealNarrationBackend('silence'), false);
  assert.equal(isRealNarrationBackend(null), false);
  assert.equal(isRealNarrationBackend(undefined), false);
});

test('buildAudioQueue preserves speaker and text alongside the resolved src, in order', () => {
  const queue = [
    { speaker: 'narrator', text: 'One.' },
    { speaker: 'his', text: 'Two.' },
    { speaker: 'her', text: 'Three.' },
  ];
  const entries = [
    { base: 'n1/000-base.mp3' },
    { base: 'n1/001-base.mp3', char: 'n1/001-char.mp3' },
    { base: 'n1/002-base.mp3', char: 'n1/002-char.mp3' },
  ];
  const result = buildAudioQueue('ember-court', queue, entries, true);
  assert.deepEqual(result.map((r) => r.speaker), ['narrator', 'his', 'her']);
  assert.deepEqual(result.map((r) => r.text), ['One.', 'Two.', 'Three.']);
});

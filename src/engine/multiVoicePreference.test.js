import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isMultiVoiceEnabled, withMultiVoiceSetting } from './multiVoicePreference.js';

test('isMultiVoiceEnabled defaults to true for a title with no saved preference', () => {
  assert.equal(isMultiVoiceEnabled({}, 'ember-court'), true);
});

test('isMultiVoiceEnabled reads back an explicitly saved value', () => {
  const settings = { multiVoiceByTitle: { 'ember-court': false } };
  assert.equal(isMultiVoiceEnabled(settings, 'ember-court'), false);
});

test('isMultiVoiceEnabled is per-title — one title\'s saved value does not affect another\'s default', () => {
  const settings = { multiVoiceByTitle: { 'ember-court': false } };
  assert.equal(isMultiVoiceEnabled(settings, 'binding-oath'), true);
});

test('withMultiVoiceSetting sets a title\'s flag without disturbing other saved settings', () => {
  const before = { autoRead: true, multiVoiceByTitle: { 'binding-oath': true } };
  const after = withMultiVoiceSetting(before, 'ember-court', false);
  assert.equal(after.autoRead, true);
  assert.equal(after.multiVoiceByTitle['binding-oath'], true);
  assert.equal(after.multiVoiceByTitle['ember-court'], false);
});

test('withMultiVoiceSetting overwrites a previous value for the same title', () => {
  const before = withMultiVoiceSetting({}, 'ember-court', true);
  const after = withMultiVoiceSetting(before, 'ember-court', false);
  assert.equal(after.multiVoiceByTitle['ember-court'], false);
});

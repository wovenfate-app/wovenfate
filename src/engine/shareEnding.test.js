import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shareUrl, endingName, endingQuote, shareText } from './shareEnding.js';

test('the share link goes to the book page, tagged as a share', () => {
  assert.equal(shareUrl('ember-court'), 'https://www.wovenfate.app/book/ember-court?utm_source=share&utm_campaign=ending');
});

test('endingName drops the "Ending:" prefix', () => {
  assert.equal(endingName('Ending: The Ember Queen'), 'The Ember Queen');
  assert.equal(endingName('Slow Fire'), 'Slow Fire');
});

test('endingQuote takes the last paragraph, without *emphasis*', () => {
  assert.equal(endingQuote('First part.\n\nYou are *free*. No debt.'), 'You are free. No debt.');
});

test('endingQuote cuts a long last paragraph to its closing sentences', () => {
  const long = 'A '.repeat(80) + 'end of that. You go to the edge of the three streets. You never feel warm again.';
  const q = endingQuote(long, 60);
  assert.ok(q.length <= 60, q);
  assert.ok(q.endsWith('You never feel warm again.'), q);
});

test('shareText names the ending, teases the others and links the book', () => {
  const free = shareText({ titleId: 'ember-court', titleName: 'The Ember Court', endingTag: 'Ending: The Ember Queen', endingsTotal: 7, isFree: true });
  assert.equal(free, 'I got "The Ember Queen" in The Ember Court 🔥 7 endings. Which will you get? Read it free: https://www.wovenfate.app/book/ember-court?utm_source=share&utm_campaign=ending');
  const paid = shareText({ titleId: 'ashbound', titleName: 'Ashbound', endingTag: 'Ending: Ashbound', endingsTotal: 7, isFree: false });
  assert.match(paid, /Start it free: https:\/\/www\.wovenfate\.app\/book\/ashbound/);
});

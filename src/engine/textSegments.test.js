import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  stripEmphasis,
  segmentParagraph,
  segmentNode,
  tokenizeWords,
  buildTextRuns,
  humanizeForSpeech,
} from './textSegments.js';

test('stripEmphasis removes asterisks and tracks their ranges in the clean text', () => {
  const { clean, italics } = stripEmphasis('The letter says *come at once* or else.');
  assert.equal(clean, 'The letter says come at once or else.');
  assert.deepEqual(italics, [{ start: 16, end: 28 }]);
  assert.equal(clean.slice(italics[0].start, italics[0].end), 'come at once');
});

test('stripEmphasis leaves a lone unmatched asterisk in place', () => {
  const { clean, italics } = stripEmphasis('half a marker *oops');
  assert.equal(clean, 'half a marker *oops');
  assert.deepEqual(italics, []);
});

test('segmentParagraph attributes quoted dialogue to "his" or "her" from nearby pronouns', () => {
  const segs = segmentParagraph('He steps closer. "You came," he says. "I wasn\'t certain you would."');
  assert.equal(segs[0].speaker, 'narrator');
  assert.equal(segs[1].speaker, 'his'); // "he says" right after the quote
  assert.equal(segs[1].text, 'You came,');
  assert.equal(segs[2].speaker, 'narrator');
});

test('segmentParagraph excludes quote marks from segment text but keeps everything else', () => {
  const segs = segmentParagraph('"Fair," you reply.');
  assert.equal(segs[0].text, 'Fair,');
  assert.equal(segs[0].text.includes('"'), false);
});

test('segmentParagraph carries italic ranges through into the right local segment', () => {
  const segs = segmentParagraph('*Come to the ember court.* No signature.');
  assert.equal(segs.length, 1);
  assert.deepEqual(segs[0].italics, [{ start: 0, end: 24 }]);
  assert.equal(segs[0].text.slice(0, 24), 'Come to the ember court.');
});

test('segmentNode groups segments by paragraph and flattens in reading order', () => {
  const node = { text: 'First paragraph, plain.\n\nSecond has "a quote," she said.' };
  const { paragraphs, flat } = segmentNode(node);
  assert.equal(paragraphs.length, 2);
  assert.equal(flat.length, paragraphs[0].length + paragraphs[1].length);
  assert.equal(flat[0].text, 'First paragraph, plain.');
});

test('segmentNode does not add a choices prompt (that is the speech queue\'s job, not display)', () => {
  const node = { text: 'Just prose.', choices: [{ label: 'Go left' }, { label: 'Go right' }] };
  const { flat } = segmentNode(node);
  assert.equal(flat.length, 1);
  assert.equal(flat[0].text, 'Just prose.');
});

test('tokenizeWords finds every whitespace-delimited word with correct offsets', () => {
  const ranges = tokenizeWords('Choose  wisely, hunter.');
  assert.deepEqual(ranges, [
    { start: 0, end: 6 },
    { start: 8, end: 15 },
    { start: 16, end: 23 },
  ]);
  ranges.forEach((r) => assert.ok('Choose  wisely, hunter.'.slice(r.start, r.end).trim().length > 0));
});

test('buildTextRuns marks a highlighted range without disturbing surrounding text', () => {
  const runs = buildTextRuns('Choose wisely', [], { start: 7, end: 13 });
  assert.deepEqual(runs.map((r) => [r.text, r.highlighted]), [
    ['Choose ', false],
    ['wisely', true],
  ]);
});

test('buildTextRuns combines italic and highlight flags on an overlapping run', () => {
  const runs = buildTextRuns('very much so', [{ start: 5, end: 9 }], { start: 5, end: 9 });
  const middle = runs.find((r) => r.text === 'much');
  assert.ok(middle);
  assert.equal(middle.italic, true);
  assert.equal(middle.highlighted, true);
});

test('buildTextRuns returns the whole text as one plain run when nothing applies', () => {
  const runs = buildTextRuns('nothing special', [], null);
  assert.deepEqual(runs, [{ text: 'nothing special', italic: false, highlighted: false }]);
});

test('humanizeForSpeech collapses stylistic letter-repeats', () => {
  assert.equal(humanizeForSpeech('noooo'), 'noo');
  assert.equal(humanizeForSpeech('AAAAH'), 'AAH');
});

test('humanizeForSpeech fuses a vowel into vowel-less invented sounds so it is not spelled out letter by letter', () => {
  const result = humanizeForSpeech('ssshhk');
  assert.notEqual(result, 'ssshhk');
  assert.match(result, /[aeiouAEIOU]/);
});

test('humanizeForSpeech leaves known interjections and ordinary prose alone', () => {
  assert.equal(humanizeForSpeech('shh, listen.'), 'shh, listen.');
  assert.equal(humanizeForSpeech('Choose how the story unfolds.'), 'Choose how the story unfolds.');
});

test('humanizeForSpeech never changes the number of whitespace-separated words', () => {
  const before = 'The letter hisses ssshhk against the door, then noooo more.';
  const after = humanizeForSpeech(before);
  assert.equal(after.split(/\s+/).length, before.split(/\s+/).length);
});

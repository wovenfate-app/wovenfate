/**
 * Pure text-processing for a chapter's prose: splitting it into narrator /
 * her / his segments, tracking italic (*word*) ranges, tokenizing words,
 * and — separately — nudging invented sound-effect words into something a
 * speech engine can actually pronounce as one sound instead of spelling
 * out letter by letter.
 *
 * This is shared by useNarration (what gets spoken) and ChapterView (what
 * gets highlighted as it's spoken) so the two can never drift out of sync
 * with each other — they're reading off the exact same segmentation of
 * the exact same string.
 */

/**
 * Strips "*word*" emphasis markers out of raw prose, returning the
 * asterisk-free text plus the [start, end) ranges (in that clean text)
 * that were wrapped in asterisks — so <em> styling can be re-applied
 * after the markers themselves are gone. The same clean text is what
 * gets spoken, so display and narration always agree character-for-
 * character on where things start and end.
 */
export function stripEmphasis(raw) {
  let clean = '';
  const italics = [];
  let i = 0;
  while (i < raw.length) {
    if (raw[i] === '*') {
      const end = raw.indexOf('*', i + 1);
      if (end === -1) {
        clean += raw.slice(i); // unmatched '*' — keep the rest verbatim
        break;
      }
      const inner = raw.slice(i + 1, end);
      italics.push({ start: clean.length, end: clean.length + inner.length });
      clean += inner;
      i = end + 1;
    } else {
      clean += raw[i];
      i += 1;
    }
  }
  return { clean, italics };
}

/**
 * Splits a single paragraph into narrator / her / his segments by pulling
 * out quoted dialogue and guessing the speaker from nearby pronouns.
 *
 * This is a heuristic, not authored speaker-tagging — it works well given
 * how consistently the prose attributes dialogue ("you say" / "he says"),
 * but an unusual sentence could occasionally misfire. The real fix, once
 * content moves to Supabase, is tagging speaker per line at authoring time
 * rather than guessing it at read time — worth doing before this scales
 * past the flagship title.
 *
 * Each segment's `text` excludes the surrounding quote marks (that's what
 * should be spoken — nobody wants to hear literal quote characters read
 * aloud); ChapterView re-adds them cosmetically when rendering dialogue.
 */
export function segmentParagraph(rawPara) {
  const { clean, italics } = stripEmphasis(rawPara);
  const segments = [];

  const pushSegment = (speaker, start, end) => {
    const text = clean.slice(start, end);
    if (!text.trim()) return;
    const localItalics = italics
      .filter((r) => r.start < end && r.end > start)
      .map((r) => ({ start: Math.max(r.start, start) - start, end: Math.min(r.end, end) - start }));
    segments.push({ speaker, text, italics: localItalics });
  };

  const quoteRegex = /"([^"]+)"/g;
  let lastIndex = 0;
  let match;
  while ((match = quoteRegex.exec(clean)) !== null) {
    pushSegment('narrator', lastIndex, match.index);

    const after = clean.slice(match.index + match[0].length, match.index + match[0].length + 80).toLowerCase();
    const beforeCtx = clean.slice(Math.max(0, match.index - 80), match.index).toLowerCase();
    const ctx = after + ' ' + beforeCtx;
    const hasHe = /\b(he|his|him)\b/.test(ctx);
    const hasYou = /\b(you|your)\b/.test(ctx);
    const speaker = hasHe && !hasYou ? 'his' : hasYou && !hasHe ? 'her' : hasHe ? 'his' : 'her';

    pushSegment(speaker, match.index + 1, match.index + match[0].length - 1);
    lastIndex = match.index + match[0].length;
  }
  pushSegment('narrator', lastIndex, clean.length);

  return segments;
}

/**
 * Splits a chapter node's full text into paragraphs of segments.
 * `flat` is every segment in reading order (what useNarration queues up
 * to speak); `paragraphs` keeps the paragraph grouping (what ChapterView
 * renders, one <p> per paragraph). This does NOT include the "what do you
 * choose?" prompt for the node's choices — that's spoken but never shown
 * as chapter prose, so it's added separately by whoever builds the speech
 * queue, not baked in here.
 */
export function segmentNode(node) {
  const paragraphs = node.text.trim().split('\n\n').map(segmentParagraph);
  return { paragraphs, flat: paragraphs.flat() };
}

/**
 * Every whitespace-delimited word's [start, end) range within `text`, in
 * order. Paired with wordIndexAtChar (below), lets useNarration map "the
 * speech engine just started a word at character N of what it's actually
 * speaking" back to a highlightable range in the text on screen.
 */
export function tokenizeWords(text) {
  const ranges = [];
  const re = /\S+/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    ranges.push({ start: m.index, end: m.index + m[0].length });
  }
  return ranges;
}

/**
 * Finds which word range a character position falls in (or the nearest
 * one after it). `ranges` must be sorted ascending, as tokenizeWords
 * produces them.
 *
 * This exists because speech engines are not reliable about firing a
 * 'word' boundary event for every whitespace-delimited token — a bare
 * punctuation token like an em dash ("thin — a dying") is commonly
 * skipped entirely. Counting boundary events 1:1 against a pre-tokenized
 * word list breaks the moment one is skipped: every highlight after that
 * point silently lands one word behind the audio for the rest of the
 * segment. Looking a charIndex up positionally instead means a skipped
 * token just never gets highlighted — it can't throw off any word after
 * it, because nothing is being counted.
 */
export function wordIndexAtChar(ranges, charIndex) {
  for (let i = 0; i < ranges.length; i += 1) {
    if (charIndex < ranges[i].end) return i;
  }
  return ranges.length ? ranges.length - 1 : -1;
}

/**
 * Breaks `text` into an ordered list of runs, each flagged with whether it
 * falls inside an italic range and/or the current narration highlight —
 * so ChapterView can render overlapping styles (a highlighted word that's
 * also italic) without nesting <em> and <mark> tags.
 */
export function buildTextRuns(text, italics = [], highlight = null) {
  const points = new Set([0, text.length]);
  italics.forEach((r) => {
    points.add(Math.max(0, Math.min(r.start, text.length)));
    points.add(Math.max(0, Math.min(r.end, text.length)));
  });
  if (highlight) {
    points.add(Math.max(0, Math.min(highlight.start, text.length)));
    points.add(Math.max(0, Math.min(highlight.end, text.length)));
  }
  const sorted = Array.from(points).sort((a, b) => a - b);

  const runs = [];
  for (let i = 0; i < sorted.length - 1; i += 1) {
    const start = sorted[i];
    const end = sorted[i + 1];
    if (start >= end) continue;
    const italic = italics.some((r) => start >= r.start && start < r.end);
    const highlighted = !!highlight && start >= highlight.start && start < highlight.end;
    runs.push({ text: text.slice(start, end), italic, highlighted });
  }
  return runs.length ? runs : [{ text, italic: false, highlighted: false }];
}

// Interjections most speech engines already have a real pronunciation
// for — left alone rather than "fixed", since guessing a replacement for
// something that already works would only risk making it worse.
const KNOWN_INTERJECTIONS = new Set([
  'hmm', 'hm', 'shh', 'shhh', 'pfft', 'tsk', 'grr', 'brr', 'psst', 'hmph', 'ssh',
]);

function fixToken(word) {
  const match = word.match(/^([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*)$/);
  if (!match) return word;
  const [, lead, core, trail] = match;
  if (core.length < 3) return word;

  // Stylistic letter-repeats ("ssshhk", "noooo") make a token longer and
  // more likely to trip an engine's "not a real word" fallback — collapse
  // any run of 3+ identical letters down to 2 before anything else.
  const collapsed = core.replace(/(.)\1{2,}/g, '$1$1');

  if (KNOWN_INTERJECTIONS.has(collapsed.toLowerCase())) return lead + collapsed + trail;

  // A token with no vowel at all is what actually causes most speech
  // engines to give up and spell a word out letter by letter — there's no
  // dictionary pronunciation to fall back to for an invented sound like
  // "sshhk". Fusing a vowel in before the last consonant gives it one
  // pronounceable syllable instead. It won't be phonetically exact, but a
  // single blended sound reads far better than five spelled-out letters.
  if (!/[aeiouAEIOU]/.test(collapsed)) {
    // Weaker engines (notably Windows/Edge SAPI voices) still spell out a
    // stretched cluster like "shhuk" — the doubled "hh" reads as unusual
    // as the original. Fully deduping repeats first ("sshhk" -> "shk")
    // before inserting the vowel lands on a short, ordinary-looking
    // cluster ("shuk") that's far more likely to get treated as one
    // syllable across engines, not just the more permissive ones.
    const deduped = collapsed.replace(/(.)\1+/g, '$1');
    const base = deduped.length >= 2 ? deduped : collapsed;
    return lead + base.slice(0, -1) + 'u' + base.slice(-1) + trail;
  }
  return lead + collapsed + trail;
}

/**
 * Adjusts a chunk of text right before it's handed to speechSynthesis so
 * invented sound effects ("ssshhk", "aaahhh") come out as one blended
 * sound rather than spelled-out letters. Never changes how many
 * whitespace-separated words are in the text — only letters within a
 * word are touched — so word-count-based highlight tracking (see
 * useNarration) stays aligned with the unmodified, on-screen text.
 */
export function humanizeForSpeech(text) {
  return text.split(/(\s+)/).map((piece) => (/^\s+$/.test(piece) ? piece : fixToken(piece))).join('');
}

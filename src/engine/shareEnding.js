// What gets shared when a reader finishes a book: the words and link that
// go with the ending card (see generateEndingImage.js for the picture).
// Pure functions, so they're testable without a DOM.

const SITE = 'https://www.wovenfate.app';

/** The book page link, tagged so shared visits show up as source "share" in the stats. */
export function shareUrl(titleId) {
  return `${SITE}/book/${titleId}?utm_source=share&utm_campaign=ending`;
}

/** "Ending: The Ember Queen" -> "The Ember Queen" */
export function endingName(endingTag = '') {
  return endingTag.replace(/^Ending:\s*/i, '').trim();
}

/**
 * The ending's closing line, for quoting on the card: the last paragraph,
 * cut to its final sentence or two if it's long. Markdown-style *emphasis*
 * is stripped, since the card draws plain text.
 */
export function endingQuote(text = '', max = 150) {
  const paras = text.split(/\n\s*\n/).map((p) => p.replace(/\*/g, '').trim()).filter(Boolean);
  let last = paras[paras.length - 1] || '';
  if (last.length > max) {
    const sentences = last.match(/[^.!?]+[.!?]+["”’]?/g) || [last];
    let out = '';
    for (let i = sentences.length - 1; i >= 0; i--) {
      const next = (sentences[i].trim() + ' ' + out).trim();
      if (next.length > max && out) break;
      out = next;
    }
    last = out.length > max ? out.slice(0, max - 1).replace(/\s+\S*$/, '') + '…' : out;
  }
  return last;
}

/** The message that goes with the card: which ending, the tease, and the link. */
export function shareText({ titleId, titleName, endingTag, endingsTotal, isFree }) {
  const name = endingName(endingTag);
  const tease = endingsTotal > 1 ? ` ${endingsTotal} endings. Which will you get?` : '';
  const offer = isFree ? 'Read it free' : 'Start it free';
  return `I got "${name}" in ${titleName} 🔥${tease} ${offer}: ${shareUrl(titleId)}`;
}

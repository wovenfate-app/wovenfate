import { segmentNode, buildTextRuns } from '../engine/textSegments.js';

/**
 * `spokenWord`, when present, is { segmentIndex, charIndex, charEnd } —
 * the word currently being read aloud, as tracked by useNarration. Its
 * segmentIndex lines up with this same node's flattened segment order
 * (see textSegments.segmentNode), so the matching run just gets a
 * highlight class; everything else renders exactly as it did before
 * narration existed.
 */
export function ChapterView({ node, spokenWord }) {
  const { paragraphs } = segmentNode(node);
  let index = -1;

  return (
    <div className="story-text">
      {paragraphs.map((segs, pi) => (
        <p key={pi}>
          {segs.map((seg) => {
            index += 1;
            const segIndex = index;
            const highlight =
              spokenWord && spokenWord.segmentIndex === segIndex
                ? { start: spokenWord.charIndex, end: spokenWord.charEnd }
                : null;
            const runs = buildTextRuns(seg.text, seg.italics, highlight);
            const quoted = seg.speaker !== 'narrator';

            return (
              <span key={segIndex}>
                {quoted && '"'}
                {runs.map((run, ri) => {
                  const cls = [run.italic && 'chapter-italic', run.highlighted && 'narration-highlight']
                    .filter(Boolean)
                    .join(' ');
                  return cls ? (
                    <span key={ri} className={cls}>{run.text}</span>
                  ) : (
                    run.text
                  );
                })}
                {quoted && '"'}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

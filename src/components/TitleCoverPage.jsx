import { COVER_IMAGES } from '../data/covers.js';
import { BOOK_DETAILS, AGE_GUIDANCE } from '../data/bookDetails.js';
import { getCoverCtaLabel } from '../engine/coverGate.js';
import { UnlockTitleAction } from './UnlockTitleAction.jsx';

const HEAT_LABELS = {
  'fade-to-black': 'Fade to Black',
};

/**
 * A title's book page (/book/:id) — shown between picking a title on the
 * landing page and entering it: the cover, tagline, what the reader is
 * getting (length, endings, tropes, content notes), and both ways in —
 * start reading free, or unlock the whole book up front.
 */
export function TitleCoverPage({ title, hasProgress, isPurchased, onEnter, unlock }) {
  const cover = COVER_IMAGES[title.id];
  const details = BOOK_DETAILS[title.id];
  const priceDisplay = title.price_cents ? `£${(title.price_cents / 100).toFixed(2)}` : '';
  const heatLabel = HEAT_LABELS[title.heat_level] || title.heat_level;

  const statusLine = isPurchased
    ? 'You own this title — read on'
    : hasProgress
    ? `Continue for free, or unlock the rest for ${priceDisplay}`
    : `The first 3 chapters are free · ${priceDisplay} to unlock the rest`;

  return (
    <div className="page cover-page">
      {cover && (
        <div className="cover-page-art">
          <img src={cover} alt={`${title.name} cover`} width="220" height="330" />
        </div>
      )}
      {heatLabel && <p className="cover-page-heat">{heatLabel}</p>}
      <h1 className="cover-page-title">{title.name}</h1>
      {title.tagline && <p className="cover-page-tagline">{title.tagline}</p>}

      {details && (
        <>
          <ul className="book-facts" aria-label="About this book">
            <li><strong>{details.readMinutes}</strong><span>minutes per read</span></li>
            <li><strong>{details.chapters}</strong><span>chapters</span></li>
            <li><strong>{details.endings}</strong><span>endings</span></li>
          </ul>
          <ul className="book-tropes" aria-label="Tropes">
            {details.tropes.map((trope) => <li key={trope}>{trope}</li>)}
          </ul>
        </>
      )}

      <p className="cover-page-meta">{statusLine}</p>
      <button className="btn-primary" onClick={onEnter}>
        {getCoverCtaLabel(hasProgress)}
      </button>

      {!isPurchased && unlock && (
        <div className="cover-page-unlock">
          <UnlockTitleAction title={title} secondary {...unlock} />
        </div>
      )}

      {details && (
        <p className="book-notes">
          {AGE_GUIDANCE} · Content notes: {details.contentNotes.join(', ').toLowerCase()}
        </p>
      )}
    </div>
  );
}

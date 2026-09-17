import { COVER_IMAGES } from '../data/covers.js';
import { getCoverCtaLabel } from '../engine/coverGate.js';

const HEAT_LABELS = {
  'fade-to-black': 'Fade to Black',
};

/**
 * Shown once, between picking a title on the landing page and actually
 * entering it — the cover, title, and tagline first, like opening a
 * book to its cover before the first page, rather than dropping the
 * reader straight into chapter text.
 */
export function TitleCoverPage({ title, hasProgress, isPurchased, onEnter }) {
  const cover = COVER_IMAGES[title.id];
  const priceDisplay = title.price_cents ? `£${(title.price_cents / 100).toFixed(2)}` : '';
  const heatLabel = HEAT_LABELS[title.heat_level] || title.heat_level;

  const statusLine = isPurchased
    ? 'You own this title — read on'
    : hasProgress
    ? `Continue for free, or unlock the rest for ${priceDisplay}`
    : `Free to start · ${priceDisplay} to unlock the rest`;

  return (
    <div className="page cover-page">
      {cover && (
        <div className="cover-page-art">
          <img src={cover} alt="" />
        </div>
      )}
      {heatLabel && <p className="cover-page-heat">{heatLabel}</p>}
      <h1 className="cover-page-title">{title.name}</h1>
      {title.tagline && <p className="cover-page-tagline">{title.tagline}</p>}
      <p className="cover-page-meta">{statusLine}</p>
      <button
        className="choice-btn"
        style={{ background: 'var(--ember)', color: '#1f1408', borderLeft: 'none', textAlign: 'center', fontWeight: 600, width: '100%' }}
        onClick={onEnter}
      >
        {getCoverCtaLabel(hasProgress)}
      </button>
    </div>
  );
}

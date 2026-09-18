import { COVER_IMAGES } from '../data/covers.js';
import { HScrollRow } from './HScrollRow.jsx';
import { InstallBanner } from './InstallBanner.jsx';

function CatalogCard({ title, hasProgress, isPurchased, onSelect }) {
  const cover = COVER_IMAGES[title.id];
  const priceDisplay = title.price_cents ? `£${(title.price_cents / 100).toFixed(2)}` : '';
  const metaText = isPurchased ? 'Purchased' : hasProgress ? 'In progress' : `Free start · ${priceDisplay}`;
  return (
    <button className="hscroll-card" onClick={() => onSelect(title.id)}>
      <div className="hscroll-cover">
        {cover && <img src={cover} alt="" />}
        {hasProgress && <span className="hscroll-progress-badge">Continue</span>}
      </div>
      <p className="hscroll-title">{title.name}</p>
      <p className="hscroll-meta">{metaText}</p>
    </button>
  );
}

export function LandingPage({ titles, inProgressIds, purchasedIds, onSelect }) {
  const inProgress = titles.filter((t) => inProgressIds.has(t.id));
  const discover = titles;

  // Dedicated wide banner spanning all titles' motifs — deliberately
  // NOT a reused title cover, which left dead space when stretched
  // wide and duplicated whichever title happened to render below it.
  const heroCover = '/covers/hero-banner.png';

  return (
    <div className="book">
      <div className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroCover})` }} />
        <div className="hero-scrim" />
        <div className="hero-content">
          <span className="hero-kicker">ROMANTASY · FADE TO BLACK</span>
          <h1 className="hero-headline">Choose how the story unfolds.</h1>
          <p className="hero-sub">{titles.length} stories, every ending yours to find.</p>
        </div>
      </div>

      {/* Sign in / save your account now lives in the header (the account
          icon button next to the title, see AppHeader + AccountModal) —
          it no longer needs its own block floating between the hero and
          the catalog rows. */}

      <InstallBanner />

      {inProgress.length > 0 && (
        <div className="catalog-section">
          <h2 className="catalog-section-title">Continue Reading</h2>
          <HScrollRow ariaLabel="Continue reading">
            {inProgress.map((title) => (
              <CatalogCard key={title.id} title={title} hasProgress isPurchased={purchasedIds.has(title.id)} onSelect={onSelect} />
            ))}
          </HScrollRow>
        </div>
      )}

      <div className="catalog-section">
        <h2 className="catalog-section-title">
          {inProgress.length > 0 ? 'All Stories' : 'Discover'}
        </h2>
        <HScrollRow ariaLabel={inProgress.length > 0 ? 'All stories' : 'Discover'}>
          {discover.map((title) => (
            <CatalogCard
              key={title.id}
              title={title}
              hasProgress={inProgressIds.has(title.id)}
              isPurchased={purchasedIds.has(title.id)}
              onSelect={onSelect}
            />
          ))}
        </HScrollRow>
      </div>
    </div>
  );
}

// Rendered by App.jsx after BundlePromo, so the footer stays the last
// thing on the page instead of sitting above the pricing card.
export function SiteFooter() {
  return (
    <footer style={{
      marginTop: 36, paddingTop: 20, borderTop: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 10 }}>
        <a href="/terms.html" style={{ fontSize: 12, color: 'var(--ink-dim)' }}>Terms of Service</a>
        <a href="/privacy.html" style={{ fontSize: 12, color: 'var(--ink-dim)' }}>Privacy Policy</a>
        <a href="/refunds.html" style={{ fontSize: 12, color: 'var(--ink-dim)' }}>Refund Policy</a>
      </div>
      <p style={{ fontSize: 11, color: 'var(--ink-dim)', margin: 0 }}>
        © {new Date().getFullYear()} Wovenfate
      </p>
    </footer>
  );
}

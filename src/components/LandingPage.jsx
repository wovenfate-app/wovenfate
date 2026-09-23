import { COVER_IMAGES } from '../data/covers.js';
import { HScrollRow } from './HScrollRow.jsx';
import { InstallBanner } from './InstallBanner.jsx';
import { SocialLinks } from './SocialLinks.jsx';

function CatalogCard({ title, hasProgress, isPurchased, onSelect, lazy }) {
  const cover = COVER_IMAGES[title.id];
  const priceDisplay = title.price_cents ? `£${(title.price_cents / 100).toFixed(2)}` : '';
  const metaText = isPurchased ? 'Purchased' : hasProgress ? 'In progress' : `Free start · ${priceDisplay}`;
  return (
    <button className="hscroll-card" onClick={() => onSelect(title.id)}>
      <div className="hscroll-cover">
        {/* Width/height reserve the 2:3 space before the image arrives, so
            the row doesn't jump as covers load. alt stays empty: the
            title is printed right below, so a screen reader would
            otherwise hear it twice. */}
        {cover && <img src={cover} alt="" width="158" height="237" loading={lazy ? 'lazy' : undefined} decoding="async" />}
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
          <span className="hero-kicker">INTERACTIVE ROMANTASY · FADE TO BLACK</span>
          <h1 className="hero-headline">Choose how the story unfolds.</h1>
          <p className="hero-sub">
            Romantasy you read and steer — your choices decide who you trust, what you risk, and how it ends. {titles.length} stories, every ending yours to find.
          </p>
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
              // Below the fold when a Continue Reading row sits above it.
              lazy={inProgress.length > 0}
            />
          ))}
        </HScrollRow>
      </div>

      {/* Right after the covers rather than above them, so the books are
          the first thing on screen and this answers "how does it work?"
          for anyone still scrolling. */}
      <h2 className="catalog-section-title">How it works</h2>
      <ol className="how-it-works">
        <li>
          <span className="how-step">1</span>
          <strong>Start free</strong>
          <span>The first 3 chapters of every book are free — no sign-up needed.</span>
        </li>
        <li>
          <span className="how-step">2</span>
          <strong>Make your choices</strong>
          <span>Every chapter ends on a decision that changes where the story goes.</span>
        </li>
        <li>
          <span className="how-step">3</span>
          <strong>Find every ending</strong>
          <span>7 endings per book. Unlock the rest once, and replay as often as you like.</span>
        </li>
      </ol>
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
      <SocialLinks />
      <div className="footer-links">
        <a href="/terms.html">Terms of Service</a>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/refunds.html">Refund Policy</a>
        <a href="mailto:support@wovenfate.app">Contact</a>
      </div>
      <p style={{ fontSize: 11, color: 'var(--ink-dim)', margin: 0 }}>
        © {new Date().getFullYear()} Wovenfate
      </p>
    </footer>
  );
}

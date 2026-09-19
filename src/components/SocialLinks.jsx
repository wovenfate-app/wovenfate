// Generic line-icon glyphs, not reproductions of each platform's actual
// logo/mascot (same approach as ShareIcon in InstallBanner.jsx) — each is
// immediately recognizable via its accompanying aria-label without
// reproducing trademarked artwork (notably Reddit's Snoo mascot, which
// is a distinct character we avoid drawing).
const ICONS = {
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4c0 2.5 2 4.5 4.5 4.5" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  pinterest: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 20c1-3 2-7 2-9a3 3 0 1 1 6 0c0 2.5-1.5 5-4 5" />
      <circle cx="12" cy="12" r="8.5" />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  ),
  threads: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 9.5c0-1 1-1.8 2.3-1.8 2 0 3.2 1.6 3.2 4.3s-1.3 4.3-3.5 4.3c-1.3 0-2.2-.6-2.2-1.6 0-1.2 1.3-1.7 3-1.9 1.6-.2 2.7-.5 2.7-1.6" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
  reddit: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5c0-4 3.6-8.5 8-8.5s8 4.5 8 8.5-3.6 6.5-8 6.5-8-2.5-8-6.5z" />
      <circle cx="9" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <path d="M9 16c1 .8 4 .8 6 0" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14 8.5h-1.5A2 2 0 0 0 10.5 10.5V12M9 12h4.5M12.25 12V17.5" />
    </svg>
  ),
  discord: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 18.5V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9.5" />
      <path d="M4 18.5c2.5 1.3 5 2 8 2s5.5-.7 8-2" />
      <circle cx="9.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
};

// Confirmed handles per the Handle & Account Strategy table.
const PLATFORMS = [
  { key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@wovenfate.app' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/wovenfate.app' },
  { key: 'pinterest', label: 'Pinterest', href: 'https://www.pinterest.com/wovenfate' },
  { key: 'x', label: 'X (Twitter)', href: 'https://x.com/wovenfateapp' },
  { key: 'threads', label: 'Threads', href: 'https://www.threads.net/@wovenfate.app' },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@wovenfateapp' },
  { key: 'reddit', label: 'Reddit', href: 'https://www.reddit.com/user/WovenfateApp' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/18zryZd9fN/?mibextid=wwXIfr' },
  // Set to non-expiring per Server Settings → Invites when this was generated.
  { key: 'discord', label: 'Discord', href: 'https://discord.gg/hqsCDBttNP' },
];

export function SocialLinks() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 14 }}
      aria-label="Wovenfate on social media"
    >
      {PLATFORMS.map(({ key, label, href }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          style={{ color: 'var(--ink-dim)', display: 'inline-flex' }}
        >
          {ICONS[key]}
        </a>
      ))}
    </div>
  );
}

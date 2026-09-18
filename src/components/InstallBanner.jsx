import { useInstallPrompt } from '../engine/useInstallPrompt.js';

function ShareIcon() {
  // A generic "share" glyph (box with an arrow lifting out of the top) —
  // not a pixel-perfect copy of Apple's own icon (that's Apple's asset,
  // not ours to reproduce), but immediately recognizable as the same
  // family of icon someone's looking for in their browser's toolbar.
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 15V3M12 3l-3.5 3.5M12 3l3.5 3.5" />
      <path d="M19 12v6.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5V12" />
    </svg>
  );
}

/**
 * A slim, dismissible nudge to add Wovenfate to the home screen — the
 * cheapest way to make a PWA feel like "an app" rather than a tab.
 * Renders nothing once installed, on a platform that hasn't offered a
 * real install path yet, or within the cooldown after being dismissed
 * (see installPrompt.js for the actual show/hide logic).
 */
export function InstallBanner() {
  const { visible, isIOS, canWebShare, promptInstall, share, dismiss } = useInstallPrompt();
  if (!visible) return null;

  return (
    <div className="install-banner">
      <span className="install-banner-text">
        {isIOS ? (
          <>
            Get the full app feel — tap{' '}
            {canWebShare ? (
              <button className="install-banner-share-btn" onClick={share}>
                <ShareIcon />Share
              </button>
            ) : (
              <strong>Share</strong>
            )}
            , then <strong>Add to Home Screen</strong> (tap <strong>View More</strong> first if you don't see it).
          </>
        ) : (
          'Add Wovenfate to your home screen for the full app experience.'
        )}
      </span>
      <div className="install-banner-actions">
        {!isIOS && (
          <button className="install-banner-btn" onClick={promptInstall}>Install</button>
        )}
        <button className="install-banner-dismiss" onClick={dismiss} aria-label="Dismiss">×</button>
      </div>
    </div>
  );
}

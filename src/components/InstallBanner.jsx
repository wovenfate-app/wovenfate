import { useInstallPrompt } from '../engine/useInstallPrompt.js';

/**
 * A slim, dismissible nudge to add Wovenfate to the home screen — the
 * cheapest way to make a PWA feel like "an app" rather than a tab.
 * Renders nothing once installed, on a platform that hasn't offered a
 * real install path yet, or within the cooldown after being dismissed
 * (see installPrompt.js for the actual show/hide logic).
 */
export function InstallBanner() {
  const { visible, isIOS, promptInstall, dismiss } = useInstallPrompt();
  if (!visible) return null;

  return (
    <div className="install-banner">
      <span className="install-banner-text">
        {isIOS
          ? <>Get the full app feel — tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.</>
          : 'Add Wovenfate to your home screen for the full app experience.'}
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

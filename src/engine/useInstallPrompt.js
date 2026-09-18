import { useState, useEffect, useCallback } from 'react';
import { isIOS, isStandaloneDisplay, shouldShowInstallPrompt } from './installPrompt.js';

const DISMISS_KEY = 'wovenfate_install_dismissed_at';

function readDismissedAt() {
  try {
    const raw = localStorage.getItem(DISMISS_KEY);
    return raw ? Number(raw) : null;
  } catch {
    // Private browsing / storage disabled — treat as "never dismissed"
    // rather than throwing; worst case the nudge shows every visit.
    return null;
  }
}

/**
 * Side-effecting wrapper around installPrompt.js: listens for the
 * browser's own install lifecycle events and localStorage, and reduces
 * all of it down to "show the nudge or don't" plus the two actions it
 * can take. The actual show/hide decision lives in the pure module so
 * it's unit-tested without a browser.
 */
export function useInstallPrompt() {
  // Chrome/Edge/Android fire 'beforeinstallprompt' once, ahead of time,
  // and expect it to be preventDefault()'d and stashed if you want to
  // trigger the native install flow later from your own UI instead of
  // whatever moment the browser would otherwise pick.
  const [deferredEvent, setDeferredEvent] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [dismissedAt, setDismissedAt] = useState(readDismissedAt);

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredEvent(e);
    };
    const handleInstalled = () => {
      setInstalled(true);
      setDeferredEvent(null);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleInstalled);
    };
  }, []);

  const dismiss = useCallback(() => {
    const now = Date.now();
    setDismissedAt(now);
    try {
      localStorage.setItem(DISMISS_KEY, String(now));
    } catch {
      // Best-effort only — worst case the nudge just reappears next visit.
    }
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredEvent) return;
    deferredEvent.prompt();
    try {
      await deferredEvent.userChoice;
    } finally {
      // A captured beforeinstallprompt event can only be used once,
      // accepted or not — drop it either way so a stale reference is
      // never re-prompted.
      setDeferredEvent(null);
    }
  }, [deferredEvent]);

  const onIOS = isIOS({
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints,
  });
  const standalone = isStandaloneDisplay({
    matchesStandalone: window.matchMedia ? window.matchMedia('(display-mode: standalone)').matches : false,
    navigatorStandalone: navigator.standalone,
  });

  const visible = !installed && shouldShowInstallPrompt({
    isStandalone: standalone,
    isIOS: onIOS,
    canPromptInstall: !!deferredEvent,
    dismissedAt,
  });

  return { visible, isIOS: onIOS, promptInstall, dismiss };
}

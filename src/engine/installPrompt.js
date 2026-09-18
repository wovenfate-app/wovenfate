/**
 * Pure decision logic for the "add to home screen" nudge — no DOM, no
 * localStorage, no navigator access here, so all of it is testable without
 * a browser. useInstallPrompt.js is the thin, side-effecting wrapper that
 * actually reads navigator/localStorage and feeds this what it needs.
 */

const IOS_UA_PATTERN = /iPad|iPhone|iPod/;

/**
 * iPadOS 13+ Safari deliberately reports itself as a Mac in the user
 * agent string (Apple's "request desktop site by default" change) — the
 * only reliable way left to tell it apart from an actual Mac is that a
 * real Mac doesn't report multiple touch points.
 */
export function isIOS({ userAgent = '', platform = '', maxTouchPoints = 0 } = {}) {
  if (IOS_UA_PATTERN.test(userAgent)) return true;
  return platform === 'MacIntel' && maxTouchPoints > 1;
}

export function isStandaloneDisplay({ matchesStandalone = false, navigatorStandalone = false } = {}) {
  return !!(matchesStandalone || navigatorStandalone);
}

// How long a dismissal sticks before the nudge is allowed to reappear —
// long enough not to nag every visit, short enough that someone who
// dismissed it before they cared might still see it again later.
export const DISMISS_COOLDOWN_MS = 14 * 24 * 60 * 60 * 1000; // 14 days

/**
 * Whether the install nudge should be visible right now.
 *
 * - Never shown once already running as an installed app (standalone) —
 *   nothing to install, and it would look broken.
 * - Never shown within the cooldown window of a dismissal.
 * - On iOS there's no event to gate on (no beforeinstallprompt support),
 *   so the instructional version is allowed to show whenever the above
 *   two don't rule it out.
 * - Everywhere else, only once the browser has actually fired
 *   beforeinstallprompt — showing an "Install" button before that would
 *   have nothing to do when clicked.
 */
export function shouldShowInstallPrompt({
  isStandalone,
  isIOS: onIOS,
  canPromptInstall,
  dismissedAt = null,
  now = Date.now(),
  cooldownMs = DISMISS_COOLDOWN_MS,
} = {}) {
  if (isStandalone) return false;
  if (dismissedAt && now - dismissedAt < cooldownMs) return false;
  if (onIOS) return true;
  return !!canPromptInstall;
}

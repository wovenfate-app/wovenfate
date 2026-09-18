import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isIOS, isStandaloneDisplay, shouldShowInstallPrompt, DISMISS_COOLDOWN_MS } from './installPrompt.js';

test('isIOS recognizes iPhone/iPad/iPod user agents', () => {
  assert.equal(isIOS({ userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)' }), true);
  assert.equal(isIOS({ userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)' }), true);
  assert.equal(isIOS({ userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 17_0)' }), true);
});

test('isIOS catches iPadOS 13+ Safari disguised as a Mac via touch points', () => {
  assert.equal(isIOS({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', platform: 'MacIntel', maxTouchPoints: 5 }), true);
});

test('isIOS does not flag a real Mac (no touch points) or Android/desktop', () => {
  assert.equal(isIOS({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', platform: 'MacIntel', maxTouchPoints: 0 }), false);
  assert.equal(isIOS({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', platform: 'Win32', maxTouchPoints: 0 }), false);
  assert.equal(isIOS({ userAgent: 'Mozilla/5.0 (Linux; Android 14)', platform: 'Linux armv8l', maxTouchPoints: 5 }), false);
});

test('isStandaloneDisplay is true from either the media query or iOS-specific flag', () => {
  assert.equal(isStandaloneDisplay({ matchesStandalone: true, navigatorStandalone: false }), true);
  assert.equal(isStandaloneDisplay({ matchesStandalone: false, navigatorStandalone: true }), true);
  assert.equal(isStandaloneDisplay({ matchesStandalone: false, navigatorStandalone: false }), false);
  assert.equal(isStandaloneDisplay(), false);
});

test('shouldShowInstallPrompt never shows once already running standalone', () => {
  assert.equal(shouldShowInstallPrompt({ isStandalone: true, isIOS: true, canPromptInstall: true }), false);
  assert.equal(shouldShowInstallPrompt({ isStandalone: true, isIOS: false, canPromptInstall: true }), false);
});

test('shouldShowInstallPrompt withholds the nudge during the dismissal cooldown', () => {
  const now = 1_000_000_000_000;
  assert.equal(shouldShowInstallPrompt({
    isStandalone: false, isIOS: true, canPromptInstall: false, dismissedAt: now - 1000, now,
  }), false);
});

test('shouldShowInstallPrompt shows again once the cooldown has elapsed', () => {
  const now = 1_000_000_000_000;
  assert.equal(shouldShowInstallPrompt({
    isStandalone: false, isIOS: true, canPromptInstall: false, dismissedAt: now - DISMISS_COOLDOWN_MS - 1, now,
  }), true);
});

test('shouldShowInstallPrompt shows the instructional nudge on iOS with no native event needed', () => {
  assert.equal(shouldShowInstallPrompt({ isStandalone: false, isIOS: true, canPromptInstall: false }), true);
});

test('shouldShowInstallPrompt on non-iOS waits for a real beforeinstallprompt event', () => {
  assert.equal(shouldShowInstallPrompt({ isStandalone: false, isIOS: false, canPromptInstall: false }), false);
  assert.equal(shouldShowInstallPrompt({ isStandalone: false, isIOS: false, canPromptInstall: true }), true);
});

import { Capacitor } from '@capacitor/core';

/**
 * True only inside the native iOS/Android wrapper (Capacitor), false in
 * the regular web app / installed PWA. Used specifically to implement
 * the "Reader App" pattern for App Store / Play Store compliance:
 * purchases outside the US must generally go through Apple's own
 * In-App Purchase system unless the app has no purchase flow at all —
 * so on native builds we show pricing information but never a tappable
 * link or button that initiates a purchase. The web/PWA version is
 * completely unaffected and keeps the full Stripe checkout flow.
 */
export function isNativeApp() {
  return Capacitor.isNativePlatform();
}

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Reverse-domain app ID — this becomes part of your App Store/Play
  // Store listing identity and CANNOT be changed after first submission
  // without effectively becoming a new app. Confirm this before your
  // first real build, not after. Using com.* here (the dominant
  // industry convention) rather than app.* (which would technically
  // match the real wovenfate.app domain) since com.company.app is what
  // most reviewers/developers expect to see, even for apps that don't
  // own a literal .com domain.
  appId: 'com.wovenfate.app',
  appName: 'Wovenfate',
  webDir: 'dist', // matches Vite's default build output folder

  server: {
    androidScheme: 'https',
  },

  ios: {
    contentInset: 'automatic',
  },

  // Matches the app's actual background color (see app.css --bg) so
  // there's no white flash while the native shell loads before the
  // web content paints.
  backgroundColor: '#17141f',
};

export default config;

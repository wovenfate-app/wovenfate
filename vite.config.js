import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Versioned filenames — see the matching comment in index.html.
      includeAssets: ['icon-192-v2.png', 'icon-512-v2.png'],
      manifest: {
        name: 'Wovenfate',
        short_name: 'Wovenfate',
        description: 'Choose how the story unfolds.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#17141f',
        theme_color: '#17141f',
        icons: [
          { src: 'icon-192-v2.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icon-192-v2.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'icon-512-v2.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icon-512-v2.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      }
    })
  ]
});

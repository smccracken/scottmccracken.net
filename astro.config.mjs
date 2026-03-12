import { defineConfig, fontProviders } from 'astro/config';

import cssnano from 'cssnano';

export default defineConfig({
  css: {
    postcss: {
      plugins: [cssnano],
    },
  },
  devToolbar: {
    enabled: false,
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Lora',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      fallbacks: ['sans-serif'],
    },
  ],
  prefetch: true,
  site: 'https://scottmccracken.net',
  redirects: {
    '/bookmarks': { status: 301, destination: '/' },
    '/projects': { status: 302, destination: '/' },
    '/work': { status: 302, destination: '/' },
  },
  trailingSlash: 'never',
});

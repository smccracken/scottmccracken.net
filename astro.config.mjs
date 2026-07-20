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
      name: 'Space Grotesk',
      cssVariable: '--font-heading',
      weights: ['500 700'],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['monospace'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400],
      styles: ['italic'],
      fallbacks: ['monospace'],
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

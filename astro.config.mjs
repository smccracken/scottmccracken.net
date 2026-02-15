import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Lora",
        cssVariable: "--font-sans",
        weights: ["400 700"],
        fallbacks: ["sans-serif"],
      },
    ],
  },
  prefetch: true,
  site: "https://scottmccracken.net",
  redirects: {
    "/about": "/",
    "/bookmarks": "/",
    "/projects": "/",
    "/work": "/",
  },
  trailingSlash: "never",
});

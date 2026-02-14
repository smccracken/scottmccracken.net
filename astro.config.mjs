import { defineConfig } from "astro/config";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  prefetch: true,
  site: "https://scottmccracken.net",
  trailingSlash: "never",
});

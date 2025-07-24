import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://arun-astro.webflow.io",
  output: "static", // SSR mode
  adapter: cloudflare({
    platformProxy: { enabled: true }, // Webflow requires this
  }),
  integrations: [react()],
});

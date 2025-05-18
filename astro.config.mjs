// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://amazing-fudge-4027bd.netlify.app/",
  integrations: [preact()],
  prefetch: {
    prefetchAll: true
  },
});
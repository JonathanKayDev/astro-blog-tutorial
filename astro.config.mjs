import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jk-astro-blog.netlify.app',
  integrations: [icon(), sitemap()],
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  }
});
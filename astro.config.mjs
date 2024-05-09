import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://avneishelomo.com/",
  i18n: {
    defaultLocale: "he",
    locales: ["he", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        ph: [
          "play",
          "arrow-left",
          "arrow-right",
          "phone",
          "whatsapp-logo",
          "envelope-simple",
          "map-pin",
          "bank",
          "credit-card",
          "globe",
          "moon-fill",
          "sun-fill",
        ],
      },
    }),
    react(),
    sitemap(),
  ],
});

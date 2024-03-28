import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "he",
    locales: ["he", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    preact(),
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
        ],
      },
    }),
  ],
});

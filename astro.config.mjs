import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://coleburch.dev",
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
});

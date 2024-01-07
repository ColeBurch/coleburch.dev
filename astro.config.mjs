import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://coleburch.dev",
  integrations: [tailwind(), icon()],
  image: {
    service: passthroughImageService(),
  },
});

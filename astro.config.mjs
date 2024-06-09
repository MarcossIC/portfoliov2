import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    nesting: true
  }), react({ include: ['**/react/*'], experimentalReactChildren: true, })],
  output: "hybrid",
  adapter: netlify()
});
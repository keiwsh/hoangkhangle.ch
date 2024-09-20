import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://hoangkhangle.com", // Your GitHub Pages base URL// The repository name
  integrations: [tailwind(), icon()],
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

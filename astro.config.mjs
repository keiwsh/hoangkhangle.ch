import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { remarkReadingTime } from './remark-reading-time.mjs';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://keiwsh.github.io',  // Your GitHub Pages base URL
  base: '/hoangkhangle.ch/',  // The repository name
  integrations: [tailwind(), icon()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

import { defineConfig } from 'astro/config';
export default defineConfig({
  // When switching to a real domain: update `site` only — everything else follows
  site: 'https://lehic.github.io',
  base: '/nida-public/',
  outDir: './docs',
  trailingSlash: 'ignore',
});

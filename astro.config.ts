import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://nida.day',
  base: '/',
  outDir: './docs',
  trailingSlash: 'ignore',
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './docs',
  base: '/nida-public',
  trailingSlash: 'ignore',
});

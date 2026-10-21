import { defineConfig } from 'astro/config';

// Defaults target GitHub Pages as a project site: https://tadejstrok.github.io/Videoactivism-academy/
// The Docker image (DJND cluster) overrides SITE and BASE_PATH to serve from a domain root.
export default defineConfig({
  site: process.env.SITE ?? 'https://tadejstrok.github.io',
  base: process.env.BASE_PATH ?? '/Videoactivism-academy',
  trailingSlash: 'always',
});

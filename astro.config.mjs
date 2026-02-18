// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://portifolio.manditecnologia.com.br',
  base: '/', // Certifique-se de que não está '/portfolio'
  output: 'static',
  integrations: [tailwind()],
});
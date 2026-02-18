import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Atualizado para o seu domínio
  site: 'https://portifolio.manditecnologia.com.br',
  output: 'static',
  integrations: [tailwind()],
  // Garante que o site carregue na raiz
  base: '/',
});
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starI from './src/integrations/star-i.mjs';

export default defineConfig({
  site: 'https://adripsmarketing.com',
  // CSS en línea: la web es pequeña y así no hay hojas de estilo que bloqueen el primer pintado
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap(), starI()],
});

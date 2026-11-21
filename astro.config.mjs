// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starI from './src/integrations/star-i.mjs';

export default defineConfig({
  site: 'https://adripsmarketing.com',
  integrations: [sitemap(), starI()],
});

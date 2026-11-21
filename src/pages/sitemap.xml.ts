/**
 * /sitemap.xml — índice de sitemaps con nombre estándar.
 * @astrojs/sitemap genera sitemap-index.xml + sitemap-0.xml, pero en el servidor
 * sitemap-index.xml no llegó a subirse (404 en Search Console, 21/11/2026) mientras
 * sitemap-0.xml sí. Este índice apunta a los mismos ficheros con la URL que Google
 * prueba por defecto, y es la que se declara en robots.txt y en Search Console.
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://adripsmarketing.com')).origin;
  const lastmod = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${base}/sitemap-0.xml</loc><lastmod>${lastmod}</lastmod></sitemap>
</sitemapindex>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

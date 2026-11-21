import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const blogCategories = [
  'SEO',
  'IA y GEO',
  'Diseño web',
  'Publicidad',
  'Redes sociales',
  'Estrategia',
  'Analítica',
] as const;

/**
 * Artículos del blog: un archivo .md por artículo en src/content/blog/.
 * Los que tienen fecha futura o draft: true no se publican.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(80),
    description: z.string().min(50).max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(blogCategories),
    tags: z.array(z.string()).default([]),
    /** Palabra clave principal del artículo */
    keyword: z.string(),
    /** Servicio relacionado (slug de src/data/services.ts) para el CTA */
    service: z.string().optional(),
    draft: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { blog };

import { owner } from './owner';
import { brand } from './brand';

/** Dominio, contacto y metadatos del sitio */
export const site = {
  name: owner.fullName,
  shortName: brand.shortName,
  brandName: brand.name,
  brandTagline: brand.tagline,
  url: 'https://adripsmarketing.com',
  lang: 'es',
  copyright: `© 2026 ${owner.fullName} · ${brand.name}. Todos los derechos reservados.`,
  tagline: `${brand.name} — ${owner.role.toLowerCase()}`,
  description: `${owner.fullName} · ${brand.name} (${brand.tagline}): SEO, Google Ads, web, redes sociales y estrategia inbound. Marketing digital con resultados medibles.`,
  ogImage: 'https://adripsmarketing.com/images/adriana-ilustracion-hero.png',
} as const;

export const contact = {
  email: 'perezsal.adriana@gmail.com',
  phone: '+34657650598',
  phoneDisplay: '+34 657 650 598',
  whatsapp: '34657650598',
  linkedin: '',
  instagram: '',
} as const;

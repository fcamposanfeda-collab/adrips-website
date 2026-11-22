import { owner } from './owner';
import { brand } from './brand';

/** Dominio, contacto, ubicación y metadatos del sitio */
export const site = {
  name: owner.fullName,
  shortName: brand.shortName,
  brandName: brand.name,
  brandTagline: brand.tagline,
  url: 'https://adripsmarketing.com',
  lang: 'es',
  copyright: `© 2026 ${owner.fullName} · ${brand.name}. Todos los derechos reservados.`,
  tagline: `${brand.name} — ${owner.role.toLowerCase()}`,
  description: `${brand.name}: diseño web y marketing digital para negocios en toda España. Sede en Ciudad Real. Webs a medida, SEO, SEM y estrategia con resultados medibles.`,
  ogImage: 'https://adripsmarketing.com/images/og-adrips.jpg',
} as const;

export const contact = {
  email: 'perezsal.adriana@gmail.com',
  phone: '+34657650598',
  phoneDisplay: '+34 657 650 598',
  whatsapp: '34657650598',
  linkedin: 'https://www.linkedin.com/in/adriana-p%C3%A9rez-salmer%C3%B3n-01860a109',
  instagram: 'https://www.instagram.com/adripsmarketing/',
} as const;

/**
 * Sede física (SEO local) + alcance de servicio (SEO nacional).
 * Ciudad Real ayuda en búsquedas locales y Google Business Profile;
 * areaServed España deja claro que trabajas en remoto en todo el país.
 */
export const location = {
  addressLocality: 'Ciudad Real',
  addressRegion: 'Castilla-La Mancha',
  addressCountry: 'ES',
  postalCode: '13001',
  streetAddress: '', // opcional: calle si quieres mostrarla en GBP / schema
  latitude: 38.9861,
  longitude: -3.9274,
  /** Texto visible en web / footer */
  label: 'Ciudad Real, España',
  /** Cómo lo explicamos a humanos e IAs */
  serviceAreaCopy:
    'Trabajo con negocios de toda España en remoto. Mi sede está en Ciudad Real (Castilla-La Mancha).',
} as const;

export const sameAs = [
  contact.linkedin,
  contact.instagram,
  // Añade Google Business Profile cuando tengas la URL
].filter(Boolean) as string[];

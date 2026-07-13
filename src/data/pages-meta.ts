import { brand } from './brand';

export const pagesMeta = {
  '/': {
    title: `${brand.name} | Adriana Pérez Salmerón — Marketing Digital 360º`,
    description:
      'SEO, Google Ads, diseño web, redes sociales y estrategia inbound. Marketing digital 360º con 5 años de experiencia en SaaS, fintech y B2B.',
  },
  '/sobre-mi': {
    title: `Sobre mí | ${brand.name} — Adriana Pérez Salmerón`,
    description:
      'Especialista en marketing digital: Exaccta, Wenance, Stellantis, Finetwork y más. Grado en Marketing, máster digital y diseño gráfico.',
  },
  '/inspiracion': {
    title: `Inspiración | ${brand.name} — Atardeceres y flores`,
    description:
      'Atardeceres, flores y los colores que inspiran la paleta de Adrips. Un vistazo personal a lo que me mueve fuera del marketing.',
  },
  '/proyectos': {
    title: `Proyectos | ${brand.name} — Adriana Pérez Salmerón`,
    description:
      'Exaccta Xpens, campaña #ElWallpaperDeIbai (Finetwork), proyectos web y creativos — casos reales de marketing digital.',
  },
  '/servicios': {
    title: `Servicios | ${brand.name} — Marketing Digital 360º`,
    description:
      'SEO y posicionamiento web, Google Ads, diseño web, redes sociales, Social Ads y estrategia inbound. Presupuesto personalizado.',
  },
  '/organizacion-eventos': {
    title: `Organización de eventos | ${brand.name} — Adriana Pérez Salmerón`,
    description:
      'Papelería, invitaciones, seating plan, corners y señalización diseñados desde cero para bodas y celebraciones. Todo personalizable — con Azurea Catering para la parte gastronómica.',
  },
  '/contacto': {
    title: `Contacto | ${brand.name} — Adriana Pérez Salmerón`,
    description:
      'Cuéntame tu objetivo y te respondo yo. Primera conversación sin compromiso y presupuesto claro.',
  },
  '/politica-de-privacidad': {
    title: `Política de privacidad | ${brand.name}`,
    description: 'Política de privacidad y protección de datos personales.',
  },
  '/politica-de-cookies': {
    title: `Política de cookies | ${brand.name}`,
    description: 'Información sobre el uso de cookies en este sitio web.',
  },
  '/aviso-legal': {
    title: `Aviso legal | ${brand.name}`,
    description: 'Información legal del titular del sitio web conforme a la LSSI.',
  },
} as const;

export type PagePath = keyof typeof pagesMeta;

export function getPageMeta(path: PagePath) {
  return pagesMeta[path];
}

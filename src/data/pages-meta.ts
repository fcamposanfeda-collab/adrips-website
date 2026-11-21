import { brand } from './brand';

export const pagesMeta = {
  '/': {
    title: `${brand.name} — Diseño web profesional que consigue clientes | Adriana Pérez Salmerón`,
    description:
      'Diseño y desarrollo de páginas web a medida para negocios y marcas personales: bonitas, rápidas, optimizadas para Google y pensadas para vender. Presupuesto cerrado.',
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
      'Proyectos de diseño web y casos de marketing digital: webs a medida, SEO local, Exaccta Xpens y la campaña #ElWallpaperDeIbai de Finetwork.',
  },
  '/servicios': {
    title: `Servicios de diseño web y marketing | ${brand.name}`,
    description:
      'Diseño y desarrollo web a medida, landing pages, SEO, Google Ads, Social Ads y estrategia digital. Presupuesto cerrado y trato directo.',
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

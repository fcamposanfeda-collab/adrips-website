import { brand } from './brand';

export const pagesMeta = {
  '/': {
    title: `Diseño web y marketing en Ciudad Real y toda España | ${brand.name}`,
    description:
      'Diseño web a medida, SEO y marketing digital desde Ciudad Real para negocios de toda España. Webs bonitas, rápidas y pensadas para vender. Presupuesto cerrado.',
  },
  '/ciudad-real': {
    title: `Páginas web y SEO local en Ciudad Real | ${brand.name}`,
    description:
      'Diseñadora web y marketing digital en Ciudad Real: webs a medida, SEO local y estrategia para negocios de la provincia y Castilla-La Mancha. También trabajo en remoto en toda España.',
  },
  '/sobre-mi': {
    title: `Sobre mí | ${brand.name} — Adriana Pérez Salmerón`,
    description:
      'Diseñadora web y marketing digital con sede en Ciudad Real. Experiencia en Exaccta, Wenance, Stellantis y Finetwork. Trabajo con clientes de toda España.',
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
      'Desarrollo web, SEO, posicionamiento en IA, Google Ads, redes y analítica. Para negocios de Ciudad Real y de toda España. Presupuesto cerrado y trato directo.',
  },
  '/organizacion-eventos': {
    title: `Organización de eventos | ${brand.name}`,
    description:
      'Papelería, invitaciones, seating plan, corners y señalización diseñados desde cero para bodas y celebraciones. Todo personalizable — con Azurea Catering para la parte gastronómica.',
  },
  '/contacto': {
    title: `Contacto | ${brand.name} — Adriana Pérez Salmerón`,
    description:
      'Cuéntame tu proyecto. Respondo desde Ciudad Real a clientes de toda España. Primera conversación sin compromiso y presupuesto claro.',
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

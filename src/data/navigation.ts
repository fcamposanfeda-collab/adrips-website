import { routes } from './routes';

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: 'Proyectos', href: routes.projects },
  { label: 'Servicios', href: routes.services },
  { label: 'Sobre mí', href: routes.about },
  { label: 'Contacto', href: routes.contact },
];

/** Eventos e Inspiración salen del menú principal para no diluir la oferta web */
export const footerNav: NavLink[] = [
  ...mainNav,
  { label: 'Papelería para eventos', href: routes.events },
  { label: 'Inspiración', href: routes.inspiration },
];

export const legalNav = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
] as const;

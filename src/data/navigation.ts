import { routes } from './routes';

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: 'Sobre mí', href: routes.about },
  { label: 'Proyectos', href: routes.projects },
  { label: 'Servicios', href: routes.services },
  { label: 'Contacto', href: routes.contact },
];

export const footerNav: NavLink[] = [...mainNav];

export const legalNav = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
] as const;

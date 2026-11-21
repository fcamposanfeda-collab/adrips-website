export type PortfolioLink = {
  label: string;
  href: string;
  type: 'web' | 'social' | 'press' | 'app';
};

/** Paleta de la portada generada (mientras no haya capturas reales) */
export type CoverTone = 'rose' | 'ink' | 'cream' | 'lavender' | 'sage' | 'terracotta';

export type PortfolioItem = {
  id: string;
  title: string;
  /** web = proyecto de diseño/desarrollo web · marketing = caso de campaña/estrategia */
  kind: 'web' | 'marketing';
  employer?: string;
  category: string;
  description: string;
  role?: string;
  period?: string;
  status: 'live' | 'in-progress' | 'coming-soon';
  tone: CoverTone;
  featured?: boolean;
  /** Dominio que se muestra en la barra del navegador de la portada */
  domain?: string;
  /** Captura real (ruta en /public). Si existe, sustituye a la portada generada. */
  image?: string;
  tags?: string[];
  metrics?: string[];
  links: PortfolioLink[];
};

/**
 * Proyectos web. Para publicar uno:
 * 1. Añade la captura en /public/images/proyectos/<id>.webp (1600×1000 aprox.)
 * 2. Rellena `image`, `links` (web en vivo) y cambia `status` a 'live'.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'los-collados',
    title: 'Finca Los Collados',
    kind: 'web',
    category: 'Web · Turismo rural',
    description:
      'Web trilingüe (español, inglés y francés) para una finca de turismo rural en el Campo de Montiel, Ciudad Real: alojamiento, caza, empresas y eventos, con reserva directa en Booking.com y WhatsApp.',
    status: 'live',
    tone: 'sage',
    featured: true,
    domain: 'loscolladosdesanmiguel.com',
    image: '/images/proyectos/los-collados.webp',
    tags: ['Diseño y desarrollo', 'Multidioma', 'Reservas'],
    links: [{ label: 'Ver web', href: 'https://loscolladosdesanmiguel.com/', type: 'web' }],
  },
  {
    id: 'azurea-catering',
    title: 'Azurea Catering',
    kind: 'web',
    category: 'Web · SEO local',
    description:
      'Web para un catering de bodas, comuniones y eventos de empresa en Ciudad Real: páginas por servicio y por zona, blog y una solicitud de presupuesto pensada para captar clientes.',
    status: 'live',
    tone: 'cream',
    featured: true,
    domain: 'azureacatering.com',
    image: '/images/proyectos/azurea-catering.webp',
    tags: ['Diseño y desarrollo', 'SEO local', 'Captación'],
    links: [{ label: 'Ver web', href: 'https://azureacatering.com/', type: 'web' }],
  },
  {
    id: 'carom-vintage',
    title: 'Carom Vintage',
    kind: 'web',
    category: 'Diseño y desarrollo web',
    description:
      'Identidad digital y web a medida. Caso completo con proceso, decisiones de diseño y resultados muy pronto.',
    status: 'coming-soon',
    tone: 'rose',
    featured: true,
    tags: ['Diseño UI', 'Desarrollo', 'SEO'],
    links: [],
  },
  {
    id: 'inversound',
    title: 'Inversound',
    kind: 'web',
    category: 'Diseño y desarrollo web',
    description:
      'Web corporativa pensada para generar confianza y contactos. Caso completo en preparación.',
    status: 'coming-soon',
    tone: 'ink',
    featured: true,
    tags: ['Web corporativa', 'Copy', 'Conversión'],
    links: [],
  },
  {
    id: 'farmacia',
    title: 'Botica García Condado',
    kind: 'web',
    category: 'Web · SEO local',
    description:
      'Web para farmacia con catálogo de servicios, SEO local y una estructura pensada para captar reservas.',
    status: 'in-progress',
    tone: 'sage',
    featured: true,
    tags: ['SEO local', 'Reservas', 'Accesibilidad'],
    links: [],
  },
  {
    id: 'exaccta-xpens',
    title: 'Exaccta Xpens',
    kind: 'marketing',
    employer: 'Exaccta',
    category: 'Marketing B2B · SaaS',
    role: 'Responsable de marketing',
    period: 'Actualidad',
    description:
      'Estrategia, contenido y campañas para la app de gestión de gastos corporativos: lanzamientos, RRSS, Google Ads, email marketing, web y reporting a dirección.',
    status: 'live',
    tone: 'lavender',
    metrics: ['+40.000 usuarios en la app', 'Web, CRM y funnels de captación'],
    links: [
      { label: 'Web Exaccta', href: 'https://exaccta.com/', type: 'web' },
      {
        label: 'LinkedIn',
        href: 'https://es.linkedin.com/company/exaccta',
        type: 'social',
      },
      {
        label: 'App Xpens',
        href: 'https://play.google.com/store/apps/details?id=com.exaccta.xpens',
        type: 'app',
      },
      {
        label: 'El Economista',
        href: 'https://www.eleconomista.es/empresas-finanzas/noticias/13389447/10/25/exaccta-xpens-la-app-que-ayuda-a-las-empresas-a-evitar-los-gastos-fantasma.html',
        type: 'press',
      },
    ],
  },
  {
    id: 'finetwork-ibai',
    title: '#ElWallpaperDeIbai',
    kind: 'marketing',
    employer: 'Finetwork',
    category: 'Activación viral · Twitch',
    role: 'Analista de datos, RRSS y afiliación',
    period: '2021',
    description:
      'Campaña viral durante el directo de Ibai del debut de Messi en el PSG: el wallpaper del stream escondía la promo en los nombres de carpetas. Acaparó la conversación en redes.',
    status: 'live',
    tone: 'rose',
    metrics: ['500K espectadores en Twitch', '+5.000 seguidores en 5 minutos'],
    links: [
      {
        label: 'Caso en blog Finetwork',
        href: 'https://blog.finetwork.com/finetwork-se-cuela-en-la-historica-retransmision-de-ibai-del-primer-partido-de-messi-en-el-psg/',
        type: 'press',
      },
      {
        label: 'MarketingDirecto',
        href: 'https://www.marketingdirecto.com/digital-general/social-media-marketing/finetwork-cuela-escritorio-ibai-llanos-marca-aprovechar-factor-sorpresa-canal-twitch',
        type: 'press',
      },
      {
        label: 'IPMark',
        href: 'https://ipmark.com/finetwork-roba-atencion-puesta-en-messi-en-canal-ibai-llanos/',
        type: 'press',
      },
    ],
  },
];

export const webProjects = portfolioItems.filter((p) => p.kind === 'web');
export const marketingCases = portfolioItems.filter((p) => p.kind === 'marketing');

export const statusLabel: Record<PortfolioItem['status'], string> = {
  live: 'Online',
  'in-progress': 'En desarrollo',
  'coming-soon': 'Próximamente',
};

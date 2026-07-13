export type PortfolioLink = {
  label: string;
  href: string;
  type: 'web' | 'social' | 'press' | 'app';
};

export type PortfolioItem = {
  id: string;
  title: string;
  employer?: string;
  category: string;
  description: string;
  role?: string;
  period?: string;
  status: 'live' | 'coming-soon' | 'creative';
  accent: 'lila' | 'rosa' | 'menta' | 'naranja' | 'azul';
  featured?: boolean;
  metrics?: string[];
  links: PortfolioLink[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'exaccta-xpens',
    title: 'Exaccta Xpens',
    employer: 'Exaccta',
    category: 'Marketing B2B · SaaS · Funnels',
    role: 'Responsable de marketing',
    period: 'Actualidad',
    description:
      'Estrategia, contenido y campañas para la app de gestión de gastos corporativos: lanzamientos, RRSS, Google Ads, email marketing, web y reporting a dirección.',
    status: 'live',
    accent: 'lila',
    featured: true,
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
        label: 'Nota en El Economista',
        href: 'https://www.eleconomista.es/empresas-finanzas/noticias/13389447/10/25/exaccta-xpens-la-app-que-ayuda-a-las-empresas-a-evitar-los-gastos-fantasma.html',
        type: 'press',
      },
    ],
  },
  {
    id: 'finetwork-ibai',
    title: '#ElWallpaperDeIbai',
    employer: 'Finetwork',
    category: 'Activación viral · Twitch · RRSS',
    role: 'Analista de datos, RRSS y afiliación',
    period: '2021',
    description:
      'Campaña viral durante el directo de Ibai del debut de Messi en el PSG: el wallpaper del stream escondía la promo en los nombres de carpetas. Acaparó la conversación en redes y superó los 100K seguidores en Instagram.',
    status: 'live',
    accent: 'rosa',
    featured: true,
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
      {
        label: 'Instagram Finetwork',
        href: 'https://www.instagram.com/finetwork/',
        type: 'social',
      },
    ],
  },
  {
    id: 'farmacia',
    title: 'Botica García Condado',
    category: 'Desarrollo web · SEO local',
    description:
      'Web para farmacia con catálogo de servicios, SEO local y estructura pensada para captar reservas. Proyecto personal en curso.',
    status: 'coming-soon',
    accent: 'menta',
    links: [],
  },
  {
    id: 'bocetos',
    title: 'Bocetos creativos',
    category: 'Diseño · Social media · Campañas',
    description:
      'Selección de bocetos y piezas creativas propias — creatividades, posts y conceptos visuales. Próximamente subiré una galería con ejemplos reales.',
    status: 'creative',
    accent: 'naranja',
    links: [],
  },
];

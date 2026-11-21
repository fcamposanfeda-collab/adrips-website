export type ServiceIcon = 'layout' | 'code' | 'search' | 'target' | 'chat' | 'compass';

export type Service = {
  id: string;
  title: string;
  /** Frase corta para tarjetas */
  summary: string;
  description: string;
  features: string[];
  icon: ServiceIcon;
  /** true = servicio principal (diseño web) */
  primary?: boolean;
};

/** Diseño web es el producto principal; el marketing es lo que lo hace rendir. */
export const services: Service[] = [
  {
    id: 'web',
    title: 'Diseño y desarrollo web',
    summary: 'Webs a medida que transmiten confianza y convierten visitas en clientes.',
    description:
      'Diseño desde cero, sin plantillas recicladas. Estructura, textos y llamadas a la acción pensados para que quien entra entienda qué haces, confíe y te contacte. Rápida, adaptada a móvil y lista para posicionar.',
    features: [
      'Diseño UI a medida',
      'Desarrollo rápido y adaptado a móvil',
      'Copy orientado a conversión',
      'SEO técnico desde el primer día',
      'Formularios, WhatsApp y analítica',
      'Textos legales y cookies',
    ],
    icon: 'layout',
    primary: true,
  },
  {
    id: 'landing',
    title: 'Landing pages',
    summary: 'Una página, un objetivo: captar leads o vender un servicio concreto.',
    description:
      'Páginas de aterrizaje para campañas, lanzamientos o servicios concretos. Diseñadas para una sola acción y preparadas para medir cada clic.',
    features: ['Un objetivo claro', 'Tests A/B', 'Integración con Ads', 'Entrega rápida'],
    icon: 'code',
    primary: true,
  },
  {
    id: 'seo',
    title: 'SEO y posicionamiento',
    summary: 'Que te encuentren en Google cuando te buscan.',
    description:
      'Auditoría, SEO técnico y de contenidos, keywords con intención comercial y seguimiento de posiciones. Especialmente útil en SEO local.',
    features: ['Auditoría SEO', 'SEO on-page', 'SEO local', 'Informes mensuales'],
    icon: 'search',
  },
  {
    id: 'ads',
    title: 'Google Ads y Social Ads',
    summary: 'Tráfico de calidad desde el primer día, midiendo cada euro.',
    description:
      'Campañas en Google y Meta con estructura, creatividades, conversiones y optimización continua para que la web reciba visitas que compran.',
    features: ['Search y Performance Max', 'Meta Ads', 'Remarketing', 'Optimización semanal'],
    icon: 'target',
  },
  {
    id: 'rrss',
    title: 'Redes sociales y contenido',
    summary: 'Contenido coherente con tu marca que lleva tráfico a tu web.',
    description:
      'Planificación editorial, community management y contenido que conecta con tu audiencia y empuja hacia la web.',
    features: ['Calendario editorial', 'Community management', 'Tono de marca'],
    icon: 'chat',
  },
  {
    id: 'inbound',
    title: 'Estrategia y automatización',
    summary: 'Funnels, email marketing y CRM para no perder ningún contacto.',
    description:
      'Plan de marketing, funnels, email marketing, nutrición de leads e integración con CRM para atraer, convertir y fidelizar.',
    features: ['Plan de marketing', 'Email marketing', 'CRM y automatización'],
    icon: 'compass',
  },
];

export const primaryServices = services.filter((s) => s.primary);
export const growthServices = services.filter((s) => !s.primary);

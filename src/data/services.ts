export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  accent: 'lila' | 'rosa' | 'menta' | 'naranja' | 'azul' | 'amarillo';
  icon: string;
};

/**
 * Servicios alineados con el enfoque 360º de referencia (Posición Web),
 * adaptados a portfolio personal Adrips.
 */
export const services: Service[] = [
  {
    id: 'seo',
    title: 'SEO y posicionamiento web',
    description:
      'Optimizo tu web para aparecer donde te buscan: auditoría, SEO técnico y de contenidos, keywords con intención comercial y seguimiento de posiciones.',
    features: ['Auditoría SEO', 'SEO on-page', 'Keywords', 'Informes mensuales'],
    accent: 'lila',
    icon: '◎',
  },
  {
    id: 'sem',
    title: 'Google Ads (SEM)',
    description:
      'Campañas de captación con retorno medible: estructura, palabras clave, anuncios, conversiones y optimización continua para que cada euro cuente.',
    features: ['Search & Display', 'Performance Max', 'Remarketing', 'Optimización semanal'],
    accent: 'menta',
    icon: '◈',
  },
  {
    id: 'web',
    title: 'Diseño y desarrollo web',
    description:
      'Webs y landings rápidas, claras y pensadas para convertir. Diseño a medida, copy orientado a acción y base SEO desde el primer día.',
    features: ['Landings', 'Web corporativa', 'Copywriting', 'Analítica integrada'],
    accent: 'rosa',
    icon: '◇',
  },
  {
    id: 'rrss',
    title: 'Redes sociales y contenido',
    description:
      'Planificación editorial, community management y contenido que conecta con tu audiencia. Coherencia de marca y engagement con objetivos de negocio.',
    features: ['Calendario editorial', 'Community management', 'Contenido orgánico', 'Tono de marca'],
    accent: 'naranja',
    icon: '✦',
  },
  {
    id: 'social-ads',
    title: 'Social Ads',
    description:
      'Publicidad en Meta y otras redes para captar leads y ventas. Segmentación, creatividades, tests A/B y embudos que complementan tu estrategia orgánica.',
    features: ['Meta Ads', 'Audiencias', 'Creatividades', 'Embudos de captación'],
    accent: 'azul',
    icon: '✧',
  },
  {
    id: 'inbound',
    title: 'Estrategia e inbound marketing',
    description:
      'Visión 360º: funnels, email marketing, nutrición de leads e integración con CRM. Un plan integral para atraer, convertir y fidelizar.',
    features: ['Plan de marketing', 'Email marketing', 'Funnels', 'CRM y automatización'],
    accent: 'amarillo',
    icon: '◆',
  },
];

export type Experience = {
  id: string;
  company: string;
  sector: string;
  role: string;
  period: string;
  highlights: string[];
  accent: 'lila' | 'rosa' | 'menta' | 'naranja';
};

export const experience: Experience[] = [
  {
    id: 'exaccta',
    company: 'Exaccta',
    sector: 'Software de gestión de gastos',
    role: 'Responsable de marketing',
    period: 'Actualidad',
    highlights: [
      'Estrategia de lanzamiento de marcas y productos digitales',
      'Campañas orgánicas y de pago en RRSS, Google Ads y partners',
      'Funnels de captación, email marketing e integración con CRM',
      'Rediseño web, landings y reporting de métricas a dirección',
    ],
    accent: 'lila',
  },
  {
    id: 'wenance',
    company: 'Wenance (Welp & Fintya)',
    sector: 'Fintech · SaaS',
    role: 'Marketing digital',
    period: '2023',
    highlights: [
      'Generación de leads y ventas B2B y B2C',
      'Propuestas de valor, demos de producto y negociación',
      'Análisis de métricas: CPL, tasa de cierre y recurrencia',
    ],
    accent: 'menta',
  },
  {
    id: 'stellantis',
    company: 'Stellantis &you',
    sector: 'Sector automovilístico',
    role: 'Marketing y patrocinios',
    period: '2022',
    highlights: [
      'Acciones de marketing y patrocinios de marca',
      'Coordinación de campañas y presencia digital',
    ],
    accent: 'naranja',
  },
  {
    id: 'finetwork',
    company: 'Finetwork',
    sector: 'Telecomunicaciones',
    role: 'Analista de datos, RRSS y afiliación',
    period: '2021',
    highlights: [
      'Análisis de datos de marketing y afiliación',
      'Gestión de redes sociales y rendimiento de canales',
    ],
    accent: 'rosa',
  },
  {
    id: 'acadef',
    company: 'Acadef',
    sector: 'Sector deportivo',
    role: 'Community manager y creadora de contenido',
    period: '2020',
    highlights: [
      'Community management y creación de contenido',
      'Análisis de datos para optimizar la comunicación digital',
    ],
    accent: 'menta',
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  accent: 'lila' | 'rosa' | 'menta';
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Impulso',
    price: 'Desde 490€',
    period: 'proyecto único',
    description: 'Ideal para emprendedores y negocios locales que quieren dar el salto online.',
    features: [
      'Landing page de 1 página',
      'Diseño personalizado',
      'SEO básico on-page',
      'Formulario de contacto',
      'Entrega en 2–3 semanas',
    ],
    accent: 'menta',
  },
  {
    id: 'growth',
    name: 'Crecimiento',
    price: 'Desde 890€',
    period: '/ mes',
    description: 'Para marcas que buscan visibilidad constante y leads recurrentes.',
    features: [
      'Web completa o mantenimiento',
      'SEO + campañas Google Ads',
      'Gestión de redes sociales',
      'Plan de contenidos mensual',
      'Informe de resultados',
    ],
    highlighted: true,
    accent: 'lila',
  },
  {
    id: 'custom',
    name: 'A medida',
    price: 'Consultar',
    period: 'presupuesto personalizado',
    description: 'Estrategia integral adaptada a tus objetivos, sector y presupuesto.',
    features: [
      'Auditoría completa',
      'Roadmap de marketing',
      'Mix de canales a medida',
      'Soporte prioritario',
      'Reuniones de seguimiento',
    ],
    accent: 'rosa',
  },
];

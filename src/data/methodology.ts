export type MethodologyStep = {
  step: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    step: '01',
    title: 'Análisis inicial',
    description:
      'Reviso tu web, canales y competencia para detectar oportunidades reales — sin promesas vacías.',
  },
  {
    step: '02',
    title: 'Estrategia a medida',
    description:
      'Definimos objetivos claros y un plan según tu negocio, sector y presupuesto. Tú sabes qué hacemos y por qué.',
  },
  {
    step: '03',
    title: 'Ejecución',
    description:
      'SEO, ads, web, contenido o redes: lo que toque, con foco en conversión y resultados medibles.',
  },
  {
    step: '04',
    title: 'Seguimiento',
    description:
      'Mido, optimizo cada mes y te explico qué funciona. Transparencia y mejora continua.',
  },
];

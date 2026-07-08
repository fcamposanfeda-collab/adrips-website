export type Value = {
  id: string;
  title: string;
  subtitle: string;
  accent: 'lila' | 'rosa' | 'menta' | 'naranja' | 'amarillo' | 'azul';
};

export const values: Value[] = [
  {
    id: 'cercania',
    title: 'Cercanía',
    subtitle: 'Escucho de verdad y te acompaño en cada paso',
    accent: 'rosa',
  },
  {
    id: 'detalle',
    title: 'Detalle',
    subtitle: 'Sin prisas: cada proyecto merece su tiempo',
    accent: 'lila',
  },
  {
    id: 'resultados',
    title: 'Resultados',
    subtitle: 'Creatividad sí, pero siempre con objetivos claros',
    accent: 'menta',
  },
  {
    id: 'curiosidad',
    title: 'Curiosidad',
    subtitle: 'Viajar y aprender me inspira en cada proyecto',
    accent: 'amarillo',
  },
];

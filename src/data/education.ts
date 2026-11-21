export type Degree = {
  title: string;
  school: string;
  year: string;
};

export type Course = {
  title: string;
  note?: string;
};

export const degrees: Degree[] = [
  {
    title: 'Máster en Marketing Digital y RRSS',
    school: 'Aula Creactiva',
    year: '2021',
  },
  {
    title: 'Máster en Diseño Gráfico',
    school: 'Aula Creactiva',
    year: '2021',
  },
  {
    title: 'Grado en Marketing',
    school: 'Universidad Rey Juan Carlos',
    year: '2020',
  },
];

export const courses: Course[] = [
  { title: 'Curso de IA para la creación web y posicionamiento' },
  { title: 'Curso de diseño de aplicaciones' },
  { title: 'Marketing digital, SEO, SEM y analítica web' },
  { title: 'Planificación de contenido y RRSS' },
  { title: 'Microsoft Office Specialist — Excel' },
  { title: 'Curso de diseño UX/UI' },
  { title: 'Inglés', note: 'Nivel B2' },
];

export const tools = [
  'Google Ads',
  'Meta Ads',
  'SEO & analítica web',
  'Email marketing',
  'CRM',
  'Figma',
  'Excel',
] as const;

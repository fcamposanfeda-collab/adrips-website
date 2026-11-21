export type Degree = {
  title: string;
  school?: string;
  year?: string;
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
  { title: 'Curso de diseño UX y UI (aplicaciones)' },
  { title: 'Curso de IA para la creación web y posicionamiento' },
];

export const courses: Course[] = [
  { title: 'Microsoft Office Specialist — Excel' },
  { title: 'Inglés', note: 'Nivel B2' },
];

export const tools = [
  'Google Ads',
  'Meta Ads',
  'Google Analytics 4',
  'Google Search Console',
  'Google Tag Manager',
  'Umami',
  'Semrush',
  'Ahrefs',
  'HubSpot',
  'Mailchimp',
  'Brevo',
  'Figma',
  'Canva',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'WordPress',
  'Cursor',
  'IA generativa (ChatGPT, Claude)',
  'Excel',
] as const;

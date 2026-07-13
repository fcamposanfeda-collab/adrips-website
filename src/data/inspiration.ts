/**
 * Galería personal — atardeceres, flores e inspiración visual.
 * Añade tus fotos en public/images/inspiracion/ y actualiza este listado.
 */
export type InspirationCategory = 'atardecer' | 'flores';

export type InspirationPhoto =
  | {
      id: string;
      category: InspirationCategory;
      alt: string;
      caption?: string;
      src: string;
    }
  | {
      id: string;
      category: InspirationCategory;
      alt: string;
      caption?: string;
      placeholder: true;
      gradient: string;
    };

export const inspirationMeta = {
  eyebrow: 'Inspiración',
  title: 'De dónde salen los colores',
  lead:
    'Una de las cosas que más me llenan es parar a mirar un atardecer o una flor en el camino.',
  leadExtra:
    'No es solo un hobby: es de donde nace buena parte de la paleta de Adrips.',
  paletteNote:
    'Rosa empolvado, crema dorada, coral suave y lavanda — los mismos tonos que encuentro cuando el cielo se despide del día o cuando las flores empiezan a abrirse.',
} as const;

export const inspirationCategories: { id: InspirationCategory | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'atardecer', label: 'Atardeceres' },
  { id: 'flores', label: 'Flores' },
];

/** Sustituye los placeholders por tus fotos en public/images/inspiracion/ */
export const inspirationPhotos: InspirationPhoto[] = [
  {
    id: 'atardecer-adriana',
    category: 'atardecer',
    src: '/images/inspiracion/adriana-atardecer.png',
    alt: 'Adriana Pérez Salmerón con un atardecer de fondo',
    caption: 'Atardecer en la costa — luz dorada y calma.',
  },
  {
    id: 'atardecer-costa-rica',
    category: 'atardecer',
    src: '/images/inspiracion/atardecer-costa-rica.png',
    alt: 'Atardecer en la playa con palmera y cielo naranja',
    caption: 'Costa Rica al atardecer — palmera, mar y cielo en llamas.',
  },
  {
    id: 'flores-amarillas',
    category: 'flores',
    src: '/images/inspiracion/flores-amarillas.png',
    alt: 'Flores amarillas en primer plano con fondo natural',
    caption: 'Amarillo vivo en pleno invierno — detalle que inspira.',
  },
  {
    id: 'atardecer-02',
    category: 'atardecer',
    placeholder: true,
    gradient: 'linear-gradient(180deg, #c8d8f0 0%, #e8a8a0 55%, #e5d4a0 100%)',
    alt: 'Atardecer — añade tu foto',
    caption: 'Otro cielo, otro tono',
  },
  {
    id: 'flores-02',
    category: 'flores',
    placeholder: true,
    gradient: 'linear-gradient(135deg, #c8b0e0 0%, #e8b8b8 60%, #f0e4b8 100%)',
    alt: 'Flores — añade tu foto',
    caption: 'Detalle floral',
  },
  {
    id: 'flores-03',
    category: 'flores',
    placeholder: true,
    gradient: 'linear-gradient(120deg, #f0e4b8 0%, #e8a8a0 40%, #b88484 100%)',
    alt: 'Flores — añade tu foto',
    caption: 'Color en primer plano',
  },
];

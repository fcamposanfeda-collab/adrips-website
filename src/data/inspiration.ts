/**
 * Galería personal — atardeceres, flores e inspiración visual.
 * Añade tus fotos en public/images/inspiracion/ y actualiza este listado.
 */
export type InspirationCategory = 'atardecer' | 'flores' | 'mar';

export type InspirationPhoto =
  | {
      id: string;
      category: InspirationCategory;
      alt: string;
      caption?: string;
      src: string;
      /** Encuadre del recorte (object-position), p. ej. '20% center' */
      position?: string;
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
  { id: 'mar', label: 'Mar' },
];

export const inspirationPhotos: InspirationPhoto[] = [
  {
    id: 'margarita-atardecer',
    category: 'flores',
    src: '/images/inspiracion/margarita-atardecer.webp',
    alt: 'Mano sosteniendo una margarita contra un cielo azul al atardecer',
    caption: 'Una margarita y el sol bajando.',
  },
  {
    id: 'cerezo-playa',
    category: 'flores',
    src: '/images/inspiracion/cerezo-playa.webp',
    alt: 'Ramas de cerezo en flor frente al mar al atardecer',
    caption: 'Flor de cerezo y mar en calma.',
  },
  {
    id: 'nubes-rosas',
    category: 'atardecer',
    src: '/images/inspiracion/nubes-rosas.webp',
    alt: 'Cielo cubierto de nubes rosas y lavanda',
    caption: 'El rosa empolvado, tal cual.',
  },
  {
    id: 'cueva-playa-lila',
    category: 'mar',
    src: '/images/inspiracion/cueva-playa-lila.webp',
    alt: 'Playa vista desde una cueva con el cielo lila al atardecer',
    caption: 'Lila, arena y el último sol.',
  },
  {
    id: 'atardecer-costa-rica',
    category: 'atardecer',
    src: '/images/inspiracion/atardecer-costa-rica.webp',
    alt: 'Atardecer en la playa con palmera y cielo naranja',
    caption: 'Costa Rica al atardecer: palmera, mar y cielo en llamas.',
  },
  {
    id: 'luna-campo',
    category: 'atardecer',
    src: '/images/inspiracion/luna-campo.webp',
    alt: 'Luna creciente sobre un campo con flores amarillas al anochecer',
    caption: 'Luna nueva y flores silvestres.',
  },
  {
    id: 'pasarela-atardecer',
    category: 'atardecer',
    src: '/images/inspiracion/pasarela-atardecer.webp',
    alt: 'Pasarela de madera entre dunas bajo un cielo rosa y violeta',
    caption: 'Un camino hacia el arrebol.',
  },
  {
    id: 'playa-rosa-atardecer',
    category: 'mar',
    src: '/images/inspiracion/playa-rosa-atardecer.webp',
    alt: 'Olas suaves en la orilla con el sol poniéndose en un cielo rosa',
    caption: 'Coral y melocotón sobre el agua.',
  },
  {
    id: 'arcoiris-rosa',
    category: 'atardecer',
    src: '/images/inspiracion/arcoiris-rosa.webp',
    alt: 'Arcoíris sobre un cielo rosa y lila',
    caption: 'Arcoíris en un cielo de algodón.',
  },
  {
    id: 'nubes-violeta',
    category: 'atardecer',
    src: '/images/inspiracion/nubes-violeta.webp',
    alt: 'Nubes violetas sobre un valle al anochecer',
    caption: 'Violeta, ciruela y naranja.',
  },
  {
    id: 'margaritas-mar',
    category: 'flores',
    src: '/images/inspiracion/margaritas-mar.webp',
    alt: 'Margaritas en primer plano con el sol poniéndose sobre el mar',
    caption: 'Margaritas con luz de última hora.',
  },
  {
    id: 'playa-arena-rosa',
    category: 'mar',
    src: '/images/inspiracion/playa-arena-rosa.webp',
    alt: 'Playa de arena rosa con agua turquesa',
    caption: 'Arena rosa y agua turquesa.',
  },
];

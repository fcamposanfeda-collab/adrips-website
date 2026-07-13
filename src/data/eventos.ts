export type EventOffering = {
  id: string;
  title: string;
  description: string;
  features: string[];
  accent: 'lila' | 'rosa' | 'menta' | 'naranja' | 'azul' | 'amarillo';
  icon: string;
};

export type EventProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const eventosMeta = {
  eyebrow: 'Organización de eventos',
  title: 'Cada detalle, diseñado desde cero',
  lead: 'Bodas, celebraciones y eventos corporativos con identidad propia: papelería, invitaciones, seating plan, corners y señalética — todo personalizable y coherente con tu estilo.',
  leadExtra:
    'Desde el primer boceto hasta el día del evento, cuido cada pieza para que tu celebración se sienta única, cuidada y memorable.',
};

export const eventOfferings: EventOffering[] = [
  {
    id: 'papeleria',
    title: 'Papelería completa',
    description:
      'Diseño integral de toda la papelería del evento: save the date, invitaciones, sobres, tarjetas de agradecimiento, menús y detalles impresos con una línea visual coherente.',
    features: ['Save the date', 'Invitaciones', 'Menús', 'Tarjetas de agradecimiento'],
    accent: 'rosa',
    icon: '✉',
  },
  {
    id: 'invitaciones',
    title: 'Invitaciones a medida',
    description:
      'Invitaciones físicas y digitales con tipografía, paleta y acabados pensados para tu evento. Formatos únicos, ilustraciones personalizadas y versiones para distintos destinatarios.',
    features: ['Diseño exclusivo', 'Versión digital', 'Acabados premium', 'RSVP integrado'],
    accent: 'lila',
    icon: '♡',
  },
  {
    id: 'seating-plan',
    title: 'Seating plan',
    description:
      'Planos de mesas claros y bonitos: asignación de invitados, numeración, nombres y señalética de mesa. Diseño adaptable al espacio y a la estética de la celebración.',
    features: ['Distribución de mesas', 'Tarjetas de sitio', 'Señalética', 'Versión para el día D'],
    accent: 'menta',
    icon: '◎',
  },
  {
    id: 'corners',
    title: 'Corners y ambientación',
    description:
      'Rincones temáticos con cartelería, señalización y elementos gráficos: photobooth, candy bar, libro de firmas, welcome desk y cualquier rincón que quieras destacar.',
    features: ['Photobooth', 'Candy bar', 'Welcome desk', 'Libro de firmas'],
    accent: 'naranja',
    icon: '✦',
  },
  {
    id: 'senalizacion',
    title: 'Señalización y wayfinding',
    description:
      'Carteles de dirección, números de mesa, seating boards, planos de ubicación y toda la señalética que guíe a tus invitados sin fricción durante el evento.',
    features: ['Carteles direccionales', 'Números de mesa', 'Planos de salón', 'Pizarras y displays'],
    accent: 'azul',
    icon: '◇',
  },
  {
    id: 'personalizacion',
    title: 'Todo personalizable',
    description:
      'Cada pieza se adapta a tu paleta, tipografías, ilustraciones y tono del evento. Nada de plantillas genéricas: un universo visual propio, listo para imprimir o compartir.',
    features: ['Paleta a medida', 'Tipografías', 'Ilustraciones', 'Coherencia 360º'],
    accent: 'amarillo',
    icon: '◆',
  },
];

export const eventProcessSteps: EventProcessStep[] = [
  {
    step: '01',
    title: 'Brief y concepto',
    description:
      'Conversamos sobre el tipo de evento, estilo, invitados y espacio. Definimos la dirección creativa y el tono visual desde el primer momento.',
  },
  {
    step: '02',
    title: 'Diseño desde cero',
    description:
      'Creo la identidad gráfica del evento: paleta, tipografías, ilustraciones y mockups de cada pieza antes de pasar a producción.',
  },
  {
    step: '03',
    title: 'Papelería y piezas',
    description:
      'Desarrollo invitaciones, seating plan, corners, menús y señalética. Todo revisado contigo hasta que cada detalle encaje.',
  },
  {
    step: '04',
    title: 'Entrega y día del evento',
    description:
      'Archivos listos para imprenta o digital, guías de montaje y soporte para que el día D todo luzca exactamente como lo imaginaste.',
  },
];

export const azureaTeaser = {
  eyebrow: 'Catering',
  title: 'Azurea Catering',
  description:
    'La parte gastronómica de tu evento, a la altura del resto. Azurea Catering crea experiencias culinarias personalizadas para bodas, celebraciones y eventos corporativos — cocina de autor con raíz manchega.',
  features: [
    'Menús personalizados para cada celebración',
    'Cocina tradicional con reinterpretación contemporánea',
    'Servicio integral: banquete, camareros y barra',
    'Eventos en Ciudad Real y a nivel nacional',
  ],
  ctaLabel: 'Conocer Azurea Catering',
  ctaHref: 'https://azureacatering.com/',
  image: {
    src: '/images/azurea-catering.png',
    alt: 'Camarero de Azurea Catering con delantal bordado y bandeja de aperitivos',
  },
};

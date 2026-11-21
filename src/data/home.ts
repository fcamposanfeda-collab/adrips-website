/** Contenido de la home: propuesta de valor, proceso, FAQ y prueba social. */

export const heroPoints = ['Diseño 100% a medida', 'Presupuesto cerrado', 'Respuesta en 24 h'];

/** Empresas donde Adriana ha llevado el marketing (texto, sin logotipos de terceros) */
export const trustedBy = ['Exaccta', 'Finetwork', 'Stellantis &You', 'Wenance', 'Acadef'];

export const pillars = [
  {
    number: '01',
    title: 'Diseño que transmite confianza',
    text: 'En segundos tu cliente decide si eres profesional. Diseño a medida, cuidado al detalle y coherente con tu marca, nunca una plantilla más.',
  },
  {
    number: '02',
    title: 'Pensada para vender',
    text: 'Estructura, textos y llamadas a la acción con criterio de marketing: cada sección empuja hacia el contacto, la reserva o la compra.',
  },
  {
    number: '03',
    title: 'Rápida, medible y en Google',
    text: 'Carga rápida, perfecta en móvil, SEO técnico de base y analítica configurada para saber de dónde llegan tus clientes.',
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Conversación y propuesta',
    description:
      'Hablamos de tu negocio, tus clientes y tus objetivos. Te envío una propuesta con alcance, plazos y precio cerrado.',
    duration: 'Semana 1',
  },
  {
    step: '02',
    title: 'Estrategia y estructura',
    description:
      'Defino la arquitectura de la web, los mensajes clave y el recorrido que hará tu cliente hasta contactarte.',
    duration: 'Semana 1–2',
  },
  {
    step: '03',
    title: 'Diseño y desarrollo',
    description:
      'Diseño a medida que revisas antes de programar. Después la construyo rápida, accesible y optimizada para SEO.',
    duration: 'Semana 2–4',
  },
  {
    step: '04',
    title: 'Lanzamiento y crecimiento',
    description:
      'Publicamos, configuro la analítica y te enseño a gestionarla. Si quieres, seguimos con SEO, campañas o mantenimiento.',
    duration: 'Semana 4+',
  },
];

export const faqs = [
  {
    q: '¿Cuánto cuesta una web?',
    a: 'Depende del alcance: no es lo mismo una landing que una web corporativa con varias secciones o una tienda. Tras una primera conversación te envío un presupuesto cerrado y por escrito, sin sorpresas ni letra pequeña.',
  },
  {
    q: '¿Cuánto se tarda?',
    a: 'Una landing suele estar lista en 2–3 semanas y una web corporativa en 4–6, según el número de secciones y lo rápido que tengamos textos e imágenes. El calendario queda fijado en la propuesta.',
  },
  {
    q: '¿Me ayudas con los textos y las fotos?',
    a: 'Sí. Vengo del marketing, así que puedo redactar o mejorar tus textos para que vendan. Si no tienes fotos, te oriento sobre qué necesitas o usamos recursos de calidad.',
  },
  {
    q: '¿Qué pasa con el dominio y el hosting?',
    a: 'Te asesoro en la elección y lo dejamos todo a tu nombre: la web y el dominio son tuyos.',
  },
  {
    q: '¿La web aparecerá en Google?',
    a: 'Toda web sale con SEO técnico de base: velocidad, estructura, metadatos y sitemap. Para competir por búsquedas concretas te propongo un plan de SEO o campañas según tu sector.',
  },
  {
    q: '¿Y después del lanzamiento?',
    a: 'No desaparezco. Puedes contar conmigo para cambios, mantenimiento, SEO o campañas, sin permanencias obligatorias.',
  },
];

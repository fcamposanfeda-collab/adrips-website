/**
 * Servicios de Adrips.
 * Cada servicio genera su página en /servicios/<slug> (src/pages/servicios/[slug].astro)
 * y aparece en el desplegable del menú, en la home y en /servicios.
 * Para editar textos de una página, cambia aquí sus campos: no hace falta tocar el diseño.
 */
export type ServiceIcon = 'layout' | 'search' | 'target' | 'chart' | 'chat' | 'pen' | 'code' | 'compass' | 'sparkle';

export type ServiceStep = { title: string; text: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  id: string;
  slug: string;
  /** Nombre en menú y tarjetas */
  title: string;
  /** Frase corta para menú y tarjetas */
  summary: string;
  /** Párrafo para la página /servicios */
  description: string;
  icon: ServiceIcon;
  /** Etiqueta destacada (p. ej. «Nuevo») en menú y tarjetas */
  badge?: string;
  /** Página del servicio */
  page: {
    metaTitle: string;
    metaDescription: string;
    /** Título H1: `title` + `emphasis` en cursiva */
    heading: string;
    emphasis: string;
    lead: string;
    /** Qué incluye */
    includes: { title: string; text: string }[];
    /** Para quién es / qué consigues */
    outcomes: string[];
    steps: ServiceStep[];
    faqs: ServiceFaq[];
  };
  features: string[];
};

export const services: Service[] = [
  {
    id: 'web',
    slug: 'desarrollo-web',
    title: 'Desarrollo web',
    summary: 'Webs y landings a medida que transmiten confianza y convierten.',
    description:
      'Diseño y desarrollo desde cero, sin plantillas recicladas. Estructura, textos y llamadas a la acción pensados para que quien entra confíe y te contacte. Rápida, adaptada a móvil y lista para posicionar.',
    icon: 'layout',
    features: ['Diseño UI a medida', 'Webs corporativas', 'Landing pages', 'Adaptada a móvil', 'SEO técnico de base'],
    page: {
      metaTitle: 'Desarrollo web a medida | Adrips Marketing',
      metaDescription:
        'Diseño y desarrollo de páginas web y landing pages a medida: rápidas, adaptadas a móvil, optimizadas para Google y pensadas para conseguir clientes.',
      heading: 'Desarrollo web',
      emphasis: 'que trabaja por ti',
      lead: 'Tu web es lo primero que ve un cliente antes de decidir si te contacta. La diseño y la desarrollo a medida para que transmita confianza, se entienda en segundos y convierta visitas en clientes.',
      includes: [
        { title: 'Diseño a medida', text: 'Una propuesta visual única, coherente con tu marca. Revisas el diseño antes de programar.' },
        { title: 'Webs y landing pages', text: 'Web corporativa con varias secciones o landing de una sola página para una campaña o servicio.' },
        { title: 'Copy orientado a conversión', text: 'Textos claros que explican qué haces y empujan hacia el contacto, la reserva o la compra.' },
        { title: 'Rápida y adaptada a móvil', text: 'Carga rápida y perfecta en cualquier pantalla, porque la mayoría de tus visitas llegan desde el móvil.' },
        { title: 'SEO técnico de base', text: 'Estructura, metadatos, sitemap y rendimiento preparados para posicionar desde el primer día.' },
        { title: 'Formularios y analítica', text: 'Formulario, WhatsApp y medición configurados para saber de dónde llegan tus clientes.' },
      ],
      outcomes: [
        'Una imagen profesional que genera confianza',
        'Más contactos y solicitudes de presupuesto',
        'Una web que puedes ampliar cuando crezcas',
        'Trato directo conmigo de principio a fin',
      ],
      steps: [
        { title: 'Conversación y propuesta', text: 'Entiendo tu negocio y te oriento sobre el alcance y los plazos. El proyecto queda a consultar.' },
        { title: 'Diseño', text: 'Estructura, mensajes y diseño visual que revisas y apruebas.' },
        { title: 'Desarrollo y lanzamiento', text: 'Construyo la web, la publico y te explico cómo gestionarla.' },
      ],
      faqs: [
        { q: '¿Cuánto tarda una web?', a: 'Una landing suele estar lista en 2–3 semanas y una web corporativa en algo más, según el número de secciones y el contenido disponible. El calendario queda fijado en la propuesta.' },
        { q: '¿La web será mía?', a: 'Sí. La web y el dominio quedan a tu nombre.' },
      ],
    },
  },
  {
    id: 'seo',
    slug: 'posicionamiento-seo',
    title: 'Posicionamiento SEO',
    summary: 'Que te encuentren en Google cuando te buscan.',
    description:
      'Auditoría, SEO técnico y de contenidos, keywords con intención comercial y seguimiento de posiciones. Especialmente útil para negocios locales.',
    icon: 'search',
    features: ['Auditoría SEO', 'SEO on-page', 'SEO local', 'Contenidos', 'Informes mensuales'],
    page: {
      metaTitle: 'Posicionamiento SEO | Adrips Marketing',
      metaDescription:
        'Posicionamiento SEO para aparecer en Google: auditoría, SEO técnico y de contenidos, SEO local y seguimiento mensual de resultados.',
      heading: 'Posicionamiento SEO',
      emphasis: 'para que te encuentren',
      lead: 'Si no apareces en Google cuando alguien busca lo que ofreces, ese cliente se va con tu competencia. Trabajo tu web para que suba en los resultados de búsqueda de forma sostenible.',
      includes: [
        { title: 'Auditoría SEO', text: 'Revisión técnica y de contenidos para detectar qué frena tu posicionamiento.' },
        { title: 'Estudio de palabras clave', text: 'Búsquedas con intención comercial: las que hacen quienes están a punto de contratar.' },
        { title: 'SEO on-page', text: 'Títulos, estructura, enlaces internos y contenidos optimizados página a página.' },
        { title: 'SEO local', text: 'Perfil de empresa en Google, reseñas y señales locales para aparecer en tu zona.' },
        { title: 'Contenidos', text: 'Planificación y redacción de contenidos que responden a lo que busca tu cliente.' },
        { title: 'Seguimiento mensual', text: 'Informe de posiciones, tráfico y contactos, explicado sin tecnicismos.' },
      ],
      outcomes: [
        'Más visitas de personas que buscan lo que ofreces',
        'Menos dependencia de la publicidad de pago',
        'Visibilidad en tu ciudad o zona',
        'Resultados medibles cada mes',
      ],
      steps: [
        { title: 'Auditoría', text: 'Analizo tu web, tu competencia y las búsquedas de tu sector.' },
        { title: 'Plan y optimización', text: 'Priorizo las mejoras con más impacto y las aplico.' },
        { title: 'Seguimiento', text: 'Mido la evolución y ajusto la estrategia cada mes.' },
      ],
      faqs: [
        { q: '¿Cuándo se ven resultados?', a: 'El SEO es una estrategia a medio plazo: depende de la competencia del sector y del punto de partida de tu web. En la auditoría te doy una previsión realista.' },
      ],
    },
  },
  {
    id: 'ia',
    slug: 'posicionamiento-en-ia',
    title: 'Posicionamiento en IA',
    summary: 'Que ChatGPT, Gemini y Perplexity recomienden tu negocio.',
    description:
      'Optimización para buscadores con inteligencia artificial (GEO): contenidos, datos estructurados y autoridad de marca para que las IA te citen y te recomienden cuando alguien pregunta por lo que ofreces.',
    icon: 'sparkle',
    badge: 'Nuevo',
    features: ['ChatGPT y Perplexity', 'Gemini y resúmenes de IA de Google', 'Datos estructurados', 'Contenido citable', 'Auditoría de visibilidad en IA'],
    page: {
      metaTitle: 'Posicionamiento en IA (ChatGPT y Gemini) | Adrips Marketing',
      metaDescription:
        'Posicionamiento en motores de búsqueda con inteligencia artificial (GEO): optimiza tu web y tu marca para aparecer y ser recomendado en ChatGPT, Gemini, Perplexity y los resúmenes con IA de Google.',
      heading: 'Posicionamiento en IA',
      emphasis: 'para que te recomienden',
      lead: 'Cada vez más personas ya no buscan en Google: le preguntan a ChatGPT, Gemini o Perplexity qué contratar. Si tu negocio no aparece en esas respuestas, no existe para ellos. Preparo tu web y tu marca para que las IA te entiendan, te citen y te recomienden.',
      includes: [
        { title: 'Auditoría de visibilidad en IA', text: 'Compruebo qué responden ChatGPT, Gemini, Perplexity y los resúmenes con IA de Google cuando alguien pregunta por tu sector y tu zona.' },
        { title: 'Contenido que las IA citan', text: 'Respuestas claras a las preguntas reales de tus clientes, con estructura, datos y un formato fácil de citar.' },
        { title: 'Datos estructurados', text: 'Schema.org para que las IA entiendan quién eres, qué ofreces, dónde y a qué precio.' },
        { title: 'Autoridad de marca', text: 'Menciones, reseñas y presencia en fuentes de confianza: las señales en las que se apoyan las IA para recomendar.' },
        { title: 'SEO técnico para rastreadores de IA', text: 'Web rápida, accesible y con la configuración adecuada para que los rastreadores de IA puedan leerla.' },
        { title: 'Seguimiento', text: 'Revisión periódica de cómo apareces en las respuestas de IA y ajustes según los resultados.' },
      ],
      outcomes: [
        'Aparecer cuando alguien pregunta a una IA por lo que haces',
        'Adelantarte a una competencia que aún no lo trabaja',
        'Reforzar también tu SEO en Google',
        'Una marca que las IA entienden y describen bien',
      ],
      steps: [
        { title: 'Auditoría', text: 'Analizo cómo te ven hoy las principales IA y tu competencia.' },
        { title: 'Optimización', text: 'Ajusto contenidos, datos estructurados y señales de marca.' },
        { title: 'Seguimiento', text: 'Mido tu presencia en las respuestas y la mejoro mes a mes.' },
      ],
      faqs: [
        { q: '¿Qué es el posicionamiento en IA o GEO?', a: 'GEO (Generative Engine Optimization) es el conjunto de técnicas para que los buscadores con inteligencia artificial, como ChatGPT, Gemini, Perplexity o los resúmenes con IA de Google, encuentren tu negocio, lo entiendan y lo mencionen en sus respuestas.' },
        { q: '¿Sustituye al SEO tradicional?', a: 'No, lo complementa. Una buena base SEO ayuda a que las IA te encuentren, y lo que se trabaja para las IA (contenido claro, datos estructurados, autoridad) también mejora tu posicionamiento en Google.' },
        { q: '¿Se puede garantizar aparecer en ChatGPT?', a: 'Nadie puede garantizarlo: las respuestas de las IA cambian y no dependen de una sola web. Lo que sí se puede es aumentar mucho las probabilidades trabajando las señales en las que se basan, y medir la evolución.' },
      ],
    },
  },
  {
    id: 'sem',
    slug: 'posicionamiento-sem',
    title: 'Posicionamiento SEM',
    summary: 'Campañas en Google Ads con resultados desde el primer día.',
    description:
      'Campañas de búsqueda, Performance Max y remarketing con estructura, conversiones y optimización continua para que cada euro cuente.',
    icon: 'target',
    features: ['Google Ads', 'Search y Performance Max', 'Remarketing', 'Medición de conversiones', 'Optimización semanal'],
    page: {
      metaTitle: 'Posicionamiento SEM y Google Ads | Adrips Marketing',
      metaDescription:
        'Gestión de campañas de Google Ads: búsqueda, Performance Max y remarketing, con medición de conversiones y optimización continua.',
      heading: 'Posicionamiento SEM',
      emphasis: 'en los primeros resultados',
      lead: 'Con Google Ads apareces arriba del todo desde el primer día, justo cuando alguien busca lo que ofreces. Monto y optimizo tus campañas para que cada euro invertido se convierta en clientes.',
      includes: [
        { title: 'Estrategia de campañas', text: 'Objetivos, presupuesto y estructura de campañas según tu negocio.' },
        { title: 'Palabras clave y anuncios', text: 'Búsquedas rentables, anuncios persuasivos y extensiones bien configuradas.' },
        { title: 'Medición de conversiones', text: 'Llamadas, formularios y ventas medidos para saber qué funciona.' },
        { title: 'Performance Max y Display', text: 'Presencia en todo el ecosistema de Google cuando tiene sentido.' },
        { title: 'Remarketing', text: 'Vuelve a impactar a quien ya visitó tu web y no contactó.' },
        { title: 'Optimización continua', text: 'Ajustes semanales de pujas, términos y anuncios, con informe claro.' },
      ],
      outcomes: [
        'Visibilidad inmediata en Google',
        'Control total del presupuesto',
        'Coste por cliente medido',
        'Campañas que mejoran mes a mes',
      ],
      steps: [
        { title: 'Análisis', text: 'Estudio tu mercado, tu competencia y tu presupuesto.' },
        { title: 'Lanzamiento', text: 'Configuro las campañas y la medición de conversiones.' },
        { title: 'Optimización', text: 'Mido, ajusto y te informo de los resultados.' },
      ],
      faqs: [
        { q: '¿Cuánto debo invertir en anuncios?', a: 'Depende de tu sector y tus objetivos. Te propongo un presupuesto inicial razonable y lo ajustamos según los resultados. La inversión en Google es aparte de la gestión.' },
      ],
    },
  },
  {
    id: 'datos',
    slug: 'analisis-de-datos',
    title: 'Análisis de datos',
    summary: 'Decisiones basadas en datos, no en intuiciones.',
    description:
      'Configuración de analítica, cuadros de mando e informes que muestran de dónde llegan tus clientes, qué funciona y dónde invertir.',
    icon: 'chart',
    features: ['Google Analytics 4', 'Tag Manager', 'Cuadros de mando', 'Informes', 'Embudos de conversión'],
    page: {
      metaTitle: 'Análisis de datos y analítica web | Adrips Marketing',
      metaDescription:
        'Analítica web y análisis de datos de marketing: configuración de Google Analytics 4, medición de conversiones, cuadros de mando e informes claros.',
      heading: 'Análisis de datos',
      emphasis: 'para decidir mejor',
      lead: 'Sin datos fiables, el marketing es ir a ciegas. Configuro la medición de tu web y tus campañas y te entrego informes claros para saber qué funciona y dónde invertir.',
      includes: [
        { title: 'Configuración de analítica', text: 'Google Analytics 4 y Tag Manager instalados y configurados correctamente.' },
        { title: 'Medición de conversiones', text: 'Formularios, llamadas, clics en WhatsApp y ventas medidos como objetivos.' },
        { title: 'Cuadros de mando', text: 'Un panel visual con las métricas que importan para tu negocio.' },
        { title: 'Embudos de conversión', text: 'Dónde abandonan tus visitas y qué mejorar para que no lo hagan.' },
        { title: 'Informes periódicos', text: 'Resultados explicados con conclusiones y próximos pasos.' },
        { title: 'Cumplimiento legal', text: 'Medición compatible con el consentimiento de cookies.' },
      ],
      outcomes: [
        'Saber de dónde llegan tus clientes',
        'Invertir en los canales que funcionan',
        'Detectar fugas en tu web',
        'Informes que se entienden',
      ],
      steps: [
        { title: 'Diagnóstico', text: 'Reviso qué mides hoy y qué necesitas medir.' },
        { title: 'Implementación', text: 'Configuro la analítica, las conversiones y el panel.' },
        { title: 'Análisis', text: 'Interpreto los datos y te propongo mejoras concretas.' },
      ],
      faqs: [
        { q: '¿Ya tengo Analytics, me sirve?', a: 'Lo reviso. Muchas instalaciones no miden las conversiones o lo hacen mal; en ese caso lo corregimos sin perder el histórico.' },
      ],
    },
  },
  {
    id: 'rrss',
    slug: 'redes-sociales',
    title: 'Redes sociales',
    summary: 'Contenido y campañas que conectan con tu audiencia.',
    description:
      'Estrategia, calendario editorial, community management y campañas en Meta Ads para construir marca y atraer clientes.',
    icon: 'chat',
    features: ['Estrategia de contenidos', 'Calendario editorial', 'Community management', 'Meta Ads', 'Informes'],
    page: {
      metaTitle: 'Gestión de redes sociales | Adrips Marketing',
      metaDescription:
        'Gestión de redes sociales para marcas y negocios: estrategia, calendario editorial, creación de contenido, community management y Meta Ads.',
      heading: 'Redes sociales',
      emphasis: 'con estrategia',
      lead: 'Publicar por publicar no sirve. Defino qué contar, a quién y con qué objetivo, y gestiono tus redes para que construyan marca y lleven clientes a tu web.',
      includes: [
        { title: 'Estrategia', text: 'Objetivos, público, tono de marca y redes donde tiene sentido estar.' },
        { title: 'Calendario editorial', text: 'Planificación mensual de publicaciones alineada con tu negocio.' },
        { title: 'Creación de contenido', text: 'Posts, carruseles, stories y textos con una línea visual coherente.' },
        { title: 'Community management', text: 'Respuesta a comentarios y mensajes con el tono de tu marca.' },
        { title: 'Social Ads', text: 'Campañas en Meta para captar leads y ventas, con tests A/B.' },
        { title: 'Informe mensual', text: 'Alcance, interacción y resultados, con aprendizajes y mejoras.' },
      ],
      outcomes: [
        'Una imagen coherente y profesional',
        'Una comunidad que confía en tu marca',
        'Tráfico y contactos desde redes',
        'Olvidarte de qué publicar cada día',
      ],
      steps: [
        { title: 'Estrategia', text: 'Analizo tu marca, tu público y tu competencia.' },
        { title: 'Planificación', text: 'Calendario y línea visual que apruebas cada mes.' },
        { title: 'Gestión y medición', text: 'Publico, dinamizo y mido los resultados.' },
      ],
      faqs: [
        { q: '¿En qué redes debería estar?', a: 'Donde esté tu cliente. No hace falta estar en todas: es mejor hacerlo bien en una o dos.' },
      ],
    },
  },
  {
    id: 'diseno',
    slug: 'diseno-grafico',
    title: 'Diseño gráfico',
    summary: 'Identidad visual y piezas que hacen reconocible tu marca.',
    description:
      'Logotipos, identidad visual, creatividades para redes y campañas, papelería y piezas impresas con una línea gráfica coherente.',
    icon: 'pen',
    features: ['Logotipo e identidad', 'Manual de marca', 'Creatividades', 'Papelería', 'Piezas impresas'],
    page: {
      metaTitle: 'Diseño gráfico e identidad visual | Adrips Marketing',
      metaDescription:
        'Diseño gráfico para marcas y negocios: logotipo, identidad visual, manual de marca, creatividades para redes y campañas, papelería e impresión.',
      heading: 'Diseño gráfico',
      emphasis: 'con personalidad',
      lead: 'Una marca bien diseñada se reconoce, se recuerda y transmite profesionalidad. Creo tu identidad visual y todas las piezas que necesitas para comunicar con coherencia.',
      includes: [
        { title: 'Logotipo', text: 'Un logotipo original, versátil y legible en cualquier tamaño.' },
        { title: 'Identidad visual', text: 'Paleta de color, tipografías y recursos gráficos propios.' },
        { title: 'Manual de marca', text: 'Guía para aplicar tu identidad de forma coherente en todo.' },
        { title: 'Creatividades', text: 'Piezas para redes sociales, anuncios y campañas.' },
        { title: 'Papelería', text: 'Tarjetas, presentaciones, catálogos y documentos corporativos.' },
        { title: 'Impresión y eventos', text: 'Cartelería, invitaciones y piezas listas para imprenta.' },
      ],
      outcomes: [
        'Una marca reconocible y memorable',
        'Coherencia en web, redes e impresos',
        'Imagen profesional frente a tu competencia',
        'Archivos listos para usar',
      ],
      steps: [
        { title: 'Brief', text: 'Hablamos de tu marca, tus valores y tu público.' },
        { title: 'Propuestas', text: 'Te presento conceptos y los afinamos juntos.' },
        { title: 'Entrega', text: 'Archivos finales en todos los formatos que necesites.' },
      ],
      faqs: [
        { q: '¿Qué formatos me entregas?', a: 'Versiones para web e impresión (vectorial, PNG, PDF) y, si lo incluimos, el manual de marca.' },
      ],
    },
  },
];

export const serviceHref = (s: Service) => `/servicios/${s.slug}`;

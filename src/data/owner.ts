/** Perfil de Adriana — personaliza textos y rutas de fotos aquí */
export const owner = {
  firstName: 'Adriana',
  fullName: 'Adriana Pérez Salmerón',
  role: 'Diseñadora web y especialista en marketing digital',
  yearsExperience: 5,
  headline: 'Diseño webs con cabeza de marketing: bonitas, rápidas y pensadas para vender',
  intro:
    'Te acompaño de cerca para llevar tu marca al siguiente nivel: estrategia con sentido, creatividad con criterio y resultados que funcionan desde el primer mes. Sede en Ciudad Real; trabajo con clientes de toda España.',
  bio: [
    'Soy especialista en marketing digital con formación en marketing y diseño gráfico. He liderado departamentos, lanzado productos y construido funnels de captación de principio a fin.',
    'Mi experiencia abarca desde community management hasta responsable de marketing: Google Ads, RRSS, email marketing, CRM, landings y analítica orientada a resultados.',
    'Trabajo desde Ciudad Real con negocios de toda España en remoto: misma cercanía y mismo criterio. Cada proyecto, a consultar.',
    'Creativa, extrovertida y con ganas de mejorar cada día. Creo que las ideas mejoran si se comparten — y que el marketing funciona cuando combina estrategia, diseño y datos reales.',
  ],
  personal: {
    title: 'Lo que me mueve fuera del ordenador',
    text:
      'Me encanta viajar, parar a ver un atardecer o fotografiar una flor en su momento. Esa curiosidad y esa mirada al detalle me acompañan también en cada proyecto: escucho, pruebo y busco la mejor forma de contar tu historia online.',
    interests: ['Atardeceres', 'Flores', 'Viajar', 'Aprender'],
  },
  photos: {
    portrait: {
      src: '/images/adriana-retrato.webp',
      alt: 'Adriana Pérez Salmerón sonriendo frente al mar al atardecer',
    },
    illustration: {
      src: '/images/adriana-ilustracion.webp',
      alt: 'Ilustración de Adriana Pérez Salmerón',
    },
    hero: {
      src: '/images/adriana-ilustracion-hero.png',
      alt: 'Ilustración de Adriana Pérez Salmerón — marketing digital con estilo creativo',
    },
    lifestyle: {
      src: '/images/adriana-playa.png',
      alt: 'Adriana Pérez Salmerón en la playa, disfrutando del mar',
    },
  },
} as const;

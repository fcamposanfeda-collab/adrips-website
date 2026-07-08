/**
 * Datos legales del titular del sitio (LSSI / RGPD).
 */
export const legal = {
  lastUpdated: 'julio 2026',

  /** Identificación del responsable (LSSI / RGPD) */
  nif: '05718916N',
  address: 'Paseo Carlos Eraña 10',
  postalCode: '13004',
  city: 'Ciudad Real',
  province: 'Ciudad Real',
  country: 'España',
  activity: 'Servicios de marketing digital, consultoría y diseño',

  /** Datos registrales (LSSI art. 10) */
  registryInfo:
    'Actividad desarrollada en régimen de autónoma. No inscrita en el Registro Mercantil.',

  /** Jurisdicción para litigios */
  jurisdiction: 'Ciudad Real',

  /** Alojamiento web */
  hosting: {
    name: 'Hostinger International Ltd.',
    url: 'https://www.hostinger.es',
    privacyUrl: 'https://www.hostinger.com/legal/privacy-policy',
  },

  /** Formulario de contacto (Web3Forms u otro) */
  formProvider: {
    name: 'Web3Forms',
    url: 'https://web3forms.com',
    privacyUrl: 'https://web3forms.com/privacy',
  },

  /**
   * Analítica — solo se activa si el visitante acepta cookies
   * y configuras el ID de medición en el sitio.
   */
  analytics: {
    provider: 'Google Analytics 4',
    measurementId: '[COMPLETAR: G-XXXXXXXXXX — dejar vacío si no usas Analytics]',
    privacyUrl: 'https://policies.google.com/privacy',
  },

  /** Tipografías cargadas desde Google Fonts */
  fonts: {
    provider: 'Google Fonts (Google LLC)',
    privacyUrl: 'https://policies.google.com/privacy',
  },
} as const;

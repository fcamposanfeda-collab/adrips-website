/** Configuración de formularios (variables PUBLIC_* en .env / secretos de GitHub) */

/**
 * El secreto de GitHub se guardó como «PUBLIC_WEB3FORMS_ACCESS_KEY=<clave>» (con el nombre
 * delante), y así llegaba al HTML: Web3Forms recibía una clave inválida. Nos quedamos solo
 * con la clave, venga como venga.
 */
const rawKey = String(import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '').trim();
const web3formsAccessKey = rawKey.includes('=') ? rawKey.slice(rawKey.lastIndexOf('=') + 1).trim() : rawKey;

export const formConfig = {
  endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  web3formsAccessKey,
  isConfigured: Boolean(import.meta.env.PUBLIC_FORM_ENDPOINT) && Boolean(web3formsAccessKey),
} as const;

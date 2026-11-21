# Adrips — Diseño web y marketing

Web de Adrips (Adriana Pérez Salmerón) en **Astro**: diseño y desarrollo web a medida + marketing digital.

## Identidad

- Logotipo: `src/components/brand/LogoMark.astro` (SVG inline) y `public/branding/adrips-logo*.svg`
- Tipografías: Fraunces (títulos) + Manrope (texto), vía Google Fonts
- Colores: `src/styles/tokens.css` (tinta ciruela `--ink`, papel `--paper`, acento terracota `--accent`)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

## Personalización rápida

| Archivo | Qué cambiar |
|---------|-------------|
| `src/data/site.ts` | Nombre de marca, email, dominio |
| `src/styles/tokens.css` | Colores y tipografía |
| `src/data/home.ts` | Textos de la home: ventajas, proceso, FAQ |
| `src/data/services.ts` | Servicios y descripciones |
| `src/data/portfolio.ts` | Proyectos (para publicar uno: captura en `public/images/proyectos/`, campo `image`, enlace y `status: 'live'`) |
| `src/data/pricing.ts` | Planes y precios |
| `astro.config.mjs` | URL del dominio (SEO + sitemap) |

## Formularios (leads)

1. Crea cuenta en [Web3Forms](https://web3forms.com)
2. Copia `.env.example` → `.env` y pega tu Access Key
3. `npm run check:forms`

## Build

```bash
npm run build
npm run preview
```

## SEO incluido

- Meta title y description optimizados
- Open Graph y Twitter Cards
- Schema.org (`ProfessionalService`)
- Sitemap automático
- HTML semántico con jerarquía H1–H3
- `robots.txt`

## Pendiente

- [ ] Dominio y email corporativo
- [ ] Capturas reales en portfolio
- [ ] Google Analytics (tras consentimiento cookies)

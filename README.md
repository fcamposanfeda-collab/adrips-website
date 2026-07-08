# Chispa Digital — Agencia de marketing digital

Landing page en **Astro** para agencia de marketing digital: desarrollo web, SEO, SEM, RRSS y contenidos.

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
| `src/styles/tokens.css` | Colores pastel |
| `src/data/services.ts` | Servicios y descripciones |
| `src/data/portfolio.ts` | Proyectos del portfolio |
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

- [ ] Nombre definitivo de marca y logo
- [ ] Dominio y email corporativo
- [ ] Capturas reales en portfolio
- [ ] Imagen OG (`public/images/og-default.jpg`)
- [ ] Google Analytics (tras consentimiento cookies)

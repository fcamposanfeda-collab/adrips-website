// Integración Astro: en los títulos (h1 y h2) sustituye visualmente el punto de cada «i»
// minúscula por la estrella del logotipo. El texto no cambia (sigue siendo «i»), así que
// SEO, lectores de pantalla y copiar/pegar no se ven afectados: solo se envuelve la letra
// en <span class="istar"> y el estilo (global.css) oculta el punto y dibuja la estrella.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HEADING = /<(h[12])(\b[^>]*)>([\s\S]*?)<\/\1>/g;
const TOKEN = /(<[^>]+>|&[#\w]+;)/;

export function wrapI(html) {
  return html.replace(HEADING, (_m, tag, attrs, inner) => {
    const out = inner
      .split(TOKEN)
      .map((part) => {
        if (!part) return part;
        if (part.startsWith('<') || (part.startsWith('&') && part.endsWith(';'))) return part;
        return part.replace(/i/g, '<span class="istar"><span class="istar__i">i</span></span>');
      })
      .join('');
    return `<${tag}${attrs}>${out}</${tag}>`;
  });
}

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

export default function starI() {
  return {
    name: 'adrips-star-i',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        for await (const file of htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          const next = wrapI(html);
          if (next !== html) await writeFile(file, next);
        }
      },
    },
  };
}

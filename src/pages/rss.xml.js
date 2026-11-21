import rss from '@astrojs/rss';
import { getPublishedPosts, postHref } from '../data/blog';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: 'Blog de Adrips',
    description: 'SEO, posicionamiento en IA, diseño web y marketing digital. Un artículo nuevo cada lunes.',
    site: context.site,
    customData: '<language>es-es</language>',
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: postHref(p),
      categories: [p.data.category, ...p.data.tags],
    })),
  });
}

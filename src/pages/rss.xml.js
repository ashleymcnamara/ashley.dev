import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const posts = await getCollection('posts');

export function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'ashley.dev',
    // `<description>` field in output xml
    description: 'Ashley Willis',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/posts/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
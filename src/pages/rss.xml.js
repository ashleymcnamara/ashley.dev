import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { marked } from 'marked';

const posts = await getCollection('posts');

export async function GET(context) {
  // Process posts to include rendered content
  const processedPosts = await Promise.all(
    posts.map(async (post) => {
      // Render markdown content to HTML (this will include headers)
      const renderedContent = marked(post.body);
      
      return {
        ...post,
        renderedContent
      };
    })
  );
  
  return rss({
    // `<title>` field in output xml
    title: 'ashley.dev',
    // `<description>` field in output xml
    description: 'Ashley Willis',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    items: processedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date), // Using the correct date field
      // Include the full rendered HTML content (including headers)
      content: post.renderedContent,
      description: post.data.description || post.data.title, // Fallback to title if description isn't available
      // Using the correct URL structure as seen in [slug].astro
      link: `/posts/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    // Adding XSL stylesheet reference
    stylesheet: '/styles/rss.xsl',
  });
}
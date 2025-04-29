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
    items: processedPosts.map((post) => {
      // Generate the OG image path for this post
      const ogImagePath = `/og-images/${post.slug}.png`;
      
      return {
        title: post.data.title,
        pubDate: new Date(post.data.date), // Using the correct date field
        // Include the full rendered HTML content
        content: post.renderedContent,
        description: post.data.description || post.data.title, // Fallback to title if description isn't available
        // Using the correct URL structure as seen in [slug].astro
        link: `/posts/${post.slug}/`,
        // Add the OG image as the image for the RSS item
        customData: `
          <media:content 
            url="${new URL(ogImagePath, context.site)}" 
            medium="image" 
            type="image/png" 
            width="1200" 
            height="630" />
          <enclosure 
            url="${new URL(ogImagePath, context.site)}" 
            length="0" 
            type="image/png" />
        `
      };
    }),
    // Add the media namespace for the RSS feed
    xmlns: {
      media: 'http://search.yahoo.com/mrss/'
    },
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    // Adding XSL stylesheet reference
    stylesheet: '/styles/rss.xsl',
  });
}
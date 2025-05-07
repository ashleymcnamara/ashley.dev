import fs from 'fs';
import path from 'path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { CollectionEntry } from 'astro:content';

// Default dimensions for OG images (1200×630 is standard for most platforms)
const WIDTH = 1200;
const HEIGHT = 630;

// We'll use a more reliable way to load fonts
async function loadGoogleFont(font: string, weights = [400, 700]) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${font}:wght@${weights.join(';')}&display=swap`,
    {
      headers: {
        // Make sure it returns TTF files
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    }
  ).then((response) => response.text());

  // Extract font URLs
  const fontUrls = css
    .match(/src: url\((.+?)\)/g)
    ?.map((src) => {
      const url = src.match(/src: url\((.+?)\)/)?.[1];
      return url;
    })
    .filter((url): url is string => url !== undefined); // Filter out undefined values

  if (!fontUrls || fontUrls.length === 0) return null;

  // Fetch each font file
  const fontDataArr = await Promise.all(
    fontUrls.map((url) => fetch(url).then((res) => res.arrayBuffer()))
  );

  return fontDataArr.map((fontData) => Buffer.from(fontData));
}

// Create directory if it doesn't exist
const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export async function generateOgImage(post: CollectionEntry<'posts'>) {
  const slug = post.slug;
  const title = post.data.title;
  const authorName = 'Ashley Willis';
  
  // Format the date with explicit UTC handling to prevent timezone issues
  const postDate = new Date(post.data.date);
  // Add a day to ensure correct date display
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'  // Force UTC timezone to prevent date shifting
  });

  // Get tags as a string if they exist
  const tagsString = post.data.tags ? post.data.tags.slice(0, 3).join(', ') : '';
  
  const outputPath = path.resolve(`./public/og-images/${slug}.png`);
  const publicPath = `/og-images/${slug}.png`;

  // Check if the image already exists (to avoid regenerating during development)
  if (fs.existsSync(outputPath)) {
    return publicPath;
  }

  // Ensure the directory exists
  ensureDirectoryExists(path.dirname(outputPath));

  try {
    // Load fonts from Google Fonts instead of local files
    const fontData = await loadGoogleFont('Inter');
    
    if (!fontData || fontData.length === 0) {
      throw new Error('Failed to load font data');
    }

    // Generate the SVG using satori
    const svg = await satori(
      {
        type: 'div',
        props: {
          style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: '#000000',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '60px',
            position: 'relative',
            overflow: 'hidden',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  position: 'absolute',
                  top: '60px',
                  left: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                },
                children: [
                  {
                    type: 'span',
                    props: {
                      style: {
                        fontSize: '24px',
                        color: '#FFFFFF',
                        opacity: 0.8,
                      },
                      children: authorName,
                    },
                  },
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                },
                children: [
                  {
                    type: 'h1',
                    props: {
                      style: {
                        fontSize: '68px',
                        fontWeight: 'bold',
                        color: '#F43F5E', // The primary color from your CSS
                        margin: '0',
                        lineHeight: 1.2,
                      },
                      children: title,
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginTop: '20px',
                      },
                      children: [
                        {
                          type: 'span',
                          props: {
                            style: {
                              fontSize: '24px',
                              color: '#FFFFFF',
                              opacity: 0.8,
                            },
                            children: formattedDate,
                          },
                        },
                        {
                          type: 'span',
                          props: {
                            style: {
                              fontSize: '24px',
                              color: '#FFFFFF',
                              opacity: 0.8,
                            },
                            children: tagsString ? `• ${tagsString}` : '',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  position: 'absolute',
                  bottom: '60px',
                  right: '60px',
                  fontSize: '24px',
                  color: '#FFFFFF',
                  opacity: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                },
                children: [
                  {
                    type: 'span',
                    props: {
                      children: 'ashley.dev',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        width: WIDTH,
        height: HEIGHT,
        fonts: [
          {
            name: 'Inter',
            data: fontData[0],
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: fontData[1] || fontData[0],
            weight: 700,
            style: 'normal',
          },
        ],
      }
    );

    // Convert SVG to PNG
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'width',
        value: WIDTH,
      },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    // Write the PNG file
    fs.writeFileSync(outputPath, pngBuffer);

    return publicPath;
  } catch (error) {
    console.error('Error generating OG image:', error);
    // Return default image path if generation fails
    return '/meta.png';
  }
}
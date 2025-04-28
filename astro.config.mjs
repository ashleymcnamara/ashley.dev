import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkEmoji from 'remark-emoji';
import { rehypeHeadingColors } from './src/utils/rehypeHeadingColors.js';
import { rehypeTableOfContents } from './src/utils/rehypeTableOfContents.js';
import rehypeShiki from 'rehype-shiki';
import * as shikiThemes from 'shiki/themes';

export default defineConfig({
    output: 'static',
    trailingSlash: 'never',
    site: 'https://ashley.dev',

    // Single page, no prefetch needed
    prefetch: false,
    
    // Make environment variables available on the client side
    vite: {
        envPrefix: 'BLUESKY_',
    },

    integrations: [
        tailwind(),
        sitemap(),
        compress({
            CSS: true,
            SVG: false,
            Image: false,
            HTML: {
                "html-minifier-terser": {
                    collapseWhitespace: true,
                    // collapseInlineTagWhitespace: true, // It breaks display-inline / flex-inline text
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    // removeEmptyElements: true, // It removes sometimes SVGs
                    removeRedundantAttributes: true
                },
            },
            JavaScript: {
                'terser': {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    }
                }
            }
        }),
        mdx({
            rehypePlugins: [
                rehypeHeadingColors, 
                rehypeTableOfContents,
                [rehypeShiki, { 
                    theme: shikiThemes.vitesseDark,
                    useBackground: true,
                    layoutMode: 'normal'
                }]
            ],
            remarkPlugins: [remarkEmoji],
        }),
    ]
});
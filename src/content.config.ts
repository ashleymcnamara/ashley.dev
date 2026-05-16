import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        blueskyPostURI: z.string().optional(),
        ogImage: z.string().optional(),
    }),
});

export const collections = {
    posts: postsCollection,
};

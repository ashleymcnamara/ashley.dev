import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        blueskyPostURI: z.string().optional(),
    }),
});

export const collections = {
    posts: postsCollection,
};

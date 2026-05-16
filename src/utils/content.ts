import type { CollectionEntry } from 'astro:content';

export function getPostSlug(post: CollectionEntry<'posts'>): string {
    return (post as any).slug || post.id.replace(/\.(md|mdx)$/, '');
}

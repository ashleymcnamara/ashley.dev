import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import type { CollectionEntry } from 'astro:content';
import { generateOgImage } from './generateOgImage';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, '../../content/posts');

function loadPost(slug: string): CollectionEntry<'posts'> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    id: `${slug}.md`,
    slug,
    body: content,
    collection: 'posts',
    data: data as CollectionEntry<'posts'>['data'],
  };
}

async function main() {
  const slug = process.argv[2];

  if (!slug) {
    console.error('Usage: tsx src/utils/og/generateOgImageForPost.ts <slug>');
    process.exit(1);
  }

  const post = loadPost(slug);
  await generateOgImage(post);
  console.log(`OG image generated for: ${slug}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

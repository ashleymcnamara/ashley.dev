
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { generateOgImage } from './generateOgImage';

// Use import.meta.url to resolve the posts directory
const POSTS_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../content/posts');

function getPostData(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);
  const slug = path.basename(filePath, '.md');
  return {
    slug,
    data,
  };
}

async function main() {
  const postFile = path.join(POSTS_DIR, 'the-quiet-season.md');
  if (!fs.existsSync(postFile)) {
    console.error('Post not found:', postFile);
    process.exit(1);
  }
  const post = getPostData(postFile);
  await generateOgImage(post);
  console.log('OG image generated for:', post.slug);
}

main();

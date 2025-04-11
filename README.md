# Ashley.dev - Personal Website

This repository contains the source code for [Ashley.dev](https://ashley.dev), my personal website built with Astro and Tailwind CSS.

## 🚀 Site Structure

The website consists of several key sections:
- **About** - Personal introduction and background
- **Projects** - Showcase of my key projects and contributions
- **Blog** - Articles and thoughts on various topics
- **Speaking** - Information about my speaking engagements
- **Contact** - Ways to get in touch with me

## 🛠️ Technology Stack

- **[Astro](https://astro.build/)** - The web framework for content-focused websites
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety for JavaScript
- **[Markdown](https://www.markdownguide.org/)** - Content management for blog posts

## ✨ Features

- Responsive design that works on desktop and mobile devices
- Content collections for structured data management
- Dark mode design for comfortable viewing
- Tag filtering system for blog posts
- Social media integration

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Management

Blog posts are written in Markdown and stored in `src/content/posts/`. Each post includes frontmatter with metadata such as:
- `title` - The title of the post
- `date` - Publication date
- `tags` - Categories/topics for filtering

## 🏗️ Project Structure

```
/
├── public/
│   └── images, robots.txt, etc.
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── config.ts
│   │   └── posts/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

## 🔄 Deployment

The site is automatically deployed when changes are pushed to the main branch.

## 📄 License

This project is licensed under the terms specified in [LICENSE.md](LICENSE.md).

// Lighthouse CI configuration
// Docs: https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md

module.exports = {
  ci: {
    collect: {
      // Serve the Astro static build output directly
      staticDistDir: './dist',
      // Test the homepage, blog listing, and a representative blog post
      url: [
        'http://localhost/',
        'http://localhost/blog',
        'http://localhost/posts/what-even-is-vibe-coding',
      ],
      // Run 3 times per URL for more stable scores
      numberOfRuns: 3,
      settings: {
        // Desktop preset — closer to real-world usage for a personal site
        // and more stable in CI than mobile throttling
        preset: 'desktop',
        chromeFlags: '--no-sandbox --headless --disable-gpu',
      },
    },
    assert: {
      assertions: {
        // Accessibility: hard floor at 0.9, target is 0.95 (shown in PR comment)
        'categories:accessibility': ['error', { minScore: 0.9 }],
        // Performance: allow some CI variance with 0.85 floor
        'categories:performance': ['error', { minScore: 0.85 }],
        // Best practices and SEO: floor at 0.9
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      // Temporary public storage for shareable report links (no server needed)
      target: 'temporary-public-storage',
    },
  },
};

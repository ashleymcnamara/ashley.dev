/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                canvas: 'var(--color-canvas)',
                surface: 'var(--color-surface)',
                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-muted': 'var(--color-text-muted)',
                'line-strong': 'var(--color-line-strong)',
                line: 'var(--color-line)',
            }
        }
    },
    plugins: [require('@tailwindcss/typography')],
};

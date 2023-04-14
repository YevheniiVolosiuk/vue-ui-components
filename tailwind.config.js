/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                'primary-accent': 'var(--primary-accent-color)',
                page: 'var(--page-background-color)',
                default: 'var(--text-default-color)',
                muted: 'var(--text-muted-color)',
                border: 'var(--border-color)',
            },
        },
    },
    plugins: [],
};

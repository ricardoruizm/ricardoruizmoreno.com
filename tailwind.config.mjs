/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent-green': '#10B981',
      },
    },
  },
  // Añade la siguiente línea
  plugins: [require('@tailwindcss/typography')],
}
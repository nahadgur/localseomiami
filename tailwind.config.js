/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b1220',
        bone: '#f7f8fb',
        paper: '#eff2f7',
        brand: {
          50:  '#eef4ff',
          100: '#dde8ff',
          300: '#7aa3ff',
          500: '#1e57ff',
          600: '#0a3fd8',
          700: '#082eb0',
          800: '#062593',
        },
        accent: {
          500: '#10d49b',
          600: '#0bb284',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

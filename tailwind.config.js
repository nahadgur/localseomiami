/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0d12',
        bone: '#fafaf7',
        paper: '#f1f0ea',
        // Coral is the primary brand expression after the 2026-05-05
        // visual refresh. The legacy `brand` keys point to the same
        // coral ramp so existing class names keep rendering correctly.
        coral: {
          50:  '#fff4f0',
          100: '#ffe2d8',
          300: '#ffae96',
          500: '#ff6b4a',
          600: '#e04a2a',
          700: '#b8381e',
          800: '#8a2914',
        },
        brand: {
          50:  '#fff4f0',
          100: '#ffe2d8',
          300: '#ffae96',
          500: '#ff6b4a',
          600: '#e04a2a',
          700: '#b8381e',
          800: '#8a2914',
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

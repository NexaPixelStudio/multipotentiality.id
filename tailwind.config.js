/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1rem' }],
      sm: ['0.9375rem', { lineHeight: '1.25rem' }],
      base: ['1.0625rem', { lineHeight: '1.5rem' }],
      lg: ['1.1875rem', { lineHeight: '1.75rem' }],
      xl: ['1.3125rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5625rem', { lineHeight: '2rem' }],
      '3xl': ['1.9375rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.3125rem', { lineHeight: '2.5rem' }],
      '5xl': ['3.0625rem', { lineHeight: '1' }],
      '6xl': ['3.8125rem', { lineHeight: '1' }],
      '7xl': ['4.5625rem', { lineHeight: '1' }],
      '8xl': ['6.0625rem', { lineHeight: '1' }],
      '9xl': ['8.0625rem', { lineHeight: '1' }]
    },
    extend: {
      colors: {
        coach: {
          green: '#217346',
          greenSoft: '#EAF4EE',
          ink: '#17211B',
          beige: '#F7F9F5',
          line: '#D6E0D7'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 33, 27, 0.07)'
      }
    }
  },
  plugins: []
};

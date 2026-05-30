/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
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

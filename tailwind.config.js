/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coach: {
          green: '#0f6b4f',
          greenSoft: '#dfeee5',
          ink: '#121714',
          beige: '#f4efe5',
          line: '#d8d1c3'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(18, 23, 20, 0.08)'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coach: {
          primary: '#335765',
          aqua: '#74A8A4',
          sky: '#B6D9E0',
          mist: '#DBE2DC',
          clay: '#7F543D',
          green: '#335765',
          greenSoft: '#B6D9E0',
          ink: '#335765',
          beige: '#DBE2DC',
          line: '#B6D9E0'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(51, 87, 101, 0.10)',
        premium: '0 24px 70px rgba(51, 87, 101, 0.16)',
        innerSoft: 'inset 0 1px 0 rgba(255,255,255,0.55)'
      },
      backgroundImage: {
        'coach-grid': 'linear-gradient(rgba(51,87,101,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(51,87,101,.045) 1px, transparent 1px)',
        'coach-hero': 'radial-gradient(circle at 8% 10%, rgba(182,217,224,.72), transparent 30%), radial-gradient(circle at 90% 0%, rgba(116,168,164,.32), transparent 34%), linear-gradient(135deg, #DBE2DC 0%, #f8faf7 48%, #DBE2DC 100%)'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: v('bg'),
        surface: v('surface'),
        sunken: v('sunken'),
        ink: v('ink'),
        muted: v('muted'),
        line: v('line'),
        brand: v('brand'),
        'brand-ink': v('brand-ink'),
        'brand-soft': v('brand-soft'),
        ok: v('ok'),
        'ok-soft': v('ok-soft'),
        bad: v('bad'),
        'bad-soft': v('bad-soft'),
        warn: v('warn'),
        'warn-soft': v('warn-soft'),
        info: v('info'),
        'info-soft': v('info-soft')
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"Cascadia Mono"', 'Consolas', '"SF Mono"', 'Menlo', 'monospace']
      },
      boxShadow: {
        soft: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.06)'
      }
    }
  },
  plugins: []
};

const fls = require('@numbered/tailwind-fluid-layout-system');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.liquid', './src/**/*.js'],
  theme: {
    grid: {
      mobile: {
        columns: 10,
        mockupWidth: 375,
        gutter: 6,
        margin: 12,
      },
      tablet: {
        columns: 10,
        mockupWidth: 768,
        gutter: 6,
        margin: 12,
        screen: 'md',
      },
      desktop: {
        columns: 20,
        mockupWidth: 1440,
        gutter: 12,
        margin: 20,
        maxWidth: 1920,
        screen: 'lg',
      },
    },
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      margin: {
        'header-size': 'var(--header-height)',
      },
      colors: {
        neutral: {
          black: '#2A2726',
          'light-grey': '#D4D4D4',
          'mid-grey': '#ACACAC',
          'dark-grey': '#797979',
        },
        brand: {
          blue: '#8ab3db',
        },
        accent: '#8ab3db',
      },
    },
  },
  plugins: [
    fls({
      color: 'transparent',
      enabled: true,
    }),
  ],
  purge: { enabled: true, content: ['./**/*.liquid'] },
};

const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "var(--primary-color)",
        50: "var(--primary-50)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
        600: "var(--primary-600)",
        700: "var(--primary-700)",
        800: "var(--primary-800)",
        900: "var(--primary-900)",
      },
      surface: {
        0: "var(--surface-0)",
        50: "var(--surface-50)",
        100: "var(--surface-100)",
        200: "var(--surface-200)",
        300: "var(--surface-300)",
        400: "var(--surface-400)",
        500: "var(--surface-500)",
        600: "var(--surface-600)",
        700: "var(--surface-700)",
        800: "var(--surface-800)",
        900: "var(--surface-900)",
      },
      text: {
        DEFAULT: "var(--text-color)",
        secondary: "var(--text-color-secondary)"
      }
    },
  },
},

  plugins: [PrimeUI],
};

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        gold: 'hsl(36 80% 40%)',
        lightWhite: 'hsl(150 10% 90%);',
        red: 'hsl(0 70% 50%)',
        brightRedLight: 'hsl(12, 86%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        deepBlue: 'rgb(16, 16, 28)',
      },
      fontFamily: {
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
        lora: "'Lora', serif",
        sand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [],
};

const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lightBlue: {
          DEFAULT: '#61DAFB',
        },
        keyBlack: {
          DEFAULT: '#42403E',
        },
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      margin: {
        23: '5.625rem',
        0.75: '0.188rem',
      },
      maxWidth: {
        s: '12rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus-within'],
      opacity: ['group-focus-within'],
      visibility: ['group-focus-within'],
      display: ['group-focus-within'],
      height: ['group-focus-within'],
    },
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.enter': {
          content: "'\u23CE'",
        },
      };
      addUtilities(newUtilities, {
        variants: ['before', 'after'],
      });
    }),
  ],
};

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
  plugins: [require('tailwindcss-interaction-variants')],
};

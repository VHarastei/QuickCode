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
    extend: {},
  },
  plugins: [],
};

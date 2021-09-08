module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green: {
          light: '#55826E',
          DEFAULT: '#416a59',
          dark: '#009eeb',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

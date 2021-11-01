const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  //mode: 'jit',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lightBlue: {
          DEFAULT: '#61DAFB',
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
        '3.5xl': '51rem',
      },
      width: {
        25: '6.25rem',
        26: '6.5rem',
        34: '8.5rem',
        98: '27.250rem',
      },
    },
  },
  variants: {
    extend: {
      textColor: [
        'visited',
        'disabled',
        'active',
        'focus-visible',
        'group-focus-within',
        'group-focus-visible',
        'group-active',
        'group-visited',
        'group-disabled',
      ],
      backgroundColor: [
        'checked',
        'visited',
        'group-hover',
        'disabled',
        'focus',
        'active',
        //'important',
        'focus-visible',
        'group-focus-within',
        'group-focus-visible',
        'group-active',
        'group-visited',
        'group-disabled',
      ],
      borderColor: [
        'checked',
        //'important',
        'focus-within',
        'disabled',
        'active',
        'hover',
        'focus-visible',
        'group-focus-within',
        'group-focus-visible',
        'group-active',
        'group-visited',
        'group-disabled',
      ],

      borderWidth: [
        'checked',
        'disabled',
        'active',
        'hover',
        'focus-visible',
        'group-focus-within',
        'group-focus-visible',
        'group-active',
        'group-visited',
        'group-hover',
        'group-disabled',
      ],
      ringColor: ['hover', 'group-hover', 'disabled'],
      ringWidth: ['hover', 'group-hover', 'disabled', 'group-disabled'],
      outline: ['focus-visible'],
      cursor: ['disabled', 'group-disabled'],
      placeholderColor: ['disabled', 'group-disabled'],
      opacity: ['group-focus-within'],
      visibility: ['group-focus-within'],
      display: ['group-focus-within'],
      height: ['group-focus-within'],
    },
  },
  variantOrder: [
    'focus',
    'last',
    'odd',
    'group-hover',
    'visited',
    'checked',
    'group-focus',
    'hover',
    'disabled',
    'even',
    'focus-within',
    'focus-visible',
    'active',
    'first',
    'group-disabled',
  ],
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

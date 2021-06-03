const { blue, red } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      blue: {
        ...blue,
        light: '#f6f9fc',
        topbar: '#373f50',
        btn: '#2b3445',
      },
      red: {
        ...red,
        yt: '#ff0000',
      },
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        yt: '1fr 2fr',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      transform: ['group-hover'],
      translate: ['group-hover'],
      backgroundColor: ['active'],
      textColor: ['active'],
      transform: ['active'],
      translate: ['active'],
      boxShadow: ['active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'manrope': ["Manrope", "sans-serif"],
    },
    extend: {colors: {
      'color-main': '#212121',
      'color-secondary': '#494949',
      'color-btn-primary': '#ABEF5F',
      'color-btn-secondary': 'rgba(171,239,95,.5)',

    },},
    
  },
  plugins: [
    require('daisyui'),
  ],
}
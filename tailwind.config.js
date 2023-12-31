const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      purple: {
        100: '#F2E7FE',
        200: '#CCADEB',
        300: '#A984DB',
        400: '#9568CF',
        DEFAULT: '#814BB8',
        600: '#602A93',
        700: '#4B1970',
        800: '#390656',
        900: '#2D004D'
      },
      orange: {
        100: '#FFEACC',
        200: '#FFD694',
        300: '#FFBF66',
        400: '#FFAF4C',
        DEFAULT: '#FFA317',
        600: '#C77800',
        700: '#B25F00',
        800: '#804000',
        900: '#4B2002'
      },
      gray: {
        100: '#EBE9ED',
        200: '#CCC7D1',
        300: '#B2ABBA',
        400: '#998FA3',
        DEFAULT: '#756A81',
        600: '#61576B',
        700: '#4D4554',
        800: '#332E38',
        900: '#1F1C22'
      },
      blue: {
        DEFAULT: '#1b0c51'
      },
      pink: {
        DEFAULT: '#bd2266',
        light: '#fa6e92'
      },
      white: colors.white
    },
    extend: {
      fontFamily: {
        lss: ['Capitolium', 'sans-serif'],
        ophidia: ['Fjalla One', 'sans-serif']
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['stardew-valley', 'sans-serif']
      },
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F5F5F5'
        },
        grey: {
          DEFAULT: '#949494',
          100: '#949494'
        },
        brown: {
          DEFAULT: '#FFE3B1',
          50: '#FFF6ED',
          75: '#F7E1B6',
          100: '#FFE3B1',
          200: '#FFD684',
          300: '#D89356',
          400: '#DB7B10',
          500: '#5E2B23',
          600: '#853D1E',
          700: '#96533A'
        },
        red: {
          DEFAULT: '#FF7D4F',
          100: '#FF7D4F',
          200: '#DB4110',
          300: '#C71D1D'
        },
        blue: {
          DEFAULT: '#56B2FF',
          100: '#7DD0FF',
          200: '#83BCFF',
          300: '#56B2FF',
          400: '#0051EE',
          500: '#19487E'
        },
        green: {
          DEFAULT: '#97E44B',
          100: '#97E44B',
          200: '#4CDE28',
          300: '#49D346',
          700: '#114908'
        },
        yellow: {
          DEFAULT: '#FFFF49',
          100: '#FFFF49',
          200: '#FFE24A',
          700: '#604B01'
        },
        orange: {
          DEFAULT: '#FF9F26',
          100: '#FF9F26',
          200: '#EC7508',
          700: '#381B00'
        },
        purple: {
          DEFAULT: '#A580E2',
          100: '#A580E2',
          200: '#C956FF',
          300: '#AE1E5A',
          500: '#330067'
        },
        ice: {
          DEFAULT: '#03FFFF',
          100: '#03FFFF'
        }
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': { 'max': '639px' },
      },
      colors: {
        'mainBg' : '#0a182e',
        'glow' : '#44aea1',
        'header' : '#ccd6f6',
        'mainTxt' : '#8890b1'
      },
      fontFamily: {
        'InterVar': ['Inter', 'sans-serif'],
      },

      }
    },
  plugins: [  require('daisyui'),],
}
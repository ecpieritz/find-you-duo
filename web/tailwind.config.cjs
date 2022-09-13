/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        fdBG: 'url("/img/fd__bg.png")'
      }
    },
  },
  plugins: [],
}

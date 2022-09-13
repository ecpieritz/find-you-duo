/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        fdBG: 'url("/img/fd__bg.png")',
        'fd-gradient': 'linear-gradient(90deg, #1e3a8a 10%, #be185d 50.52%, #f59e0b 90%)'
      }
    },
  },
  plugins: [],
}

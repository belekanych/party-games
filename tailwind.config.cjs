/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // yellow: '#F7CB45',
      black: '#000000',
      white: '#ffffff',
      red: '#ff3333',
      orange: '#DB5E0D',
      yellow: '#ffcc33',
      lime: '#B8DA0D',
      green: '#60D226',
      teal: '#12D8D2',
      blue: '#1172DB',
      indigo: '#1012D6',
      violet: '#9210DA',
      pink: '#D911AA',
    },
    extend: {
      boxShadow: {
        'brutal': '2px 2px',
      }
    },
  },
  plugins: [],
}

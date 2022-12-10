/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: '#F7CB45',
      black: '#000000',
      white: '#ffffff',
      red: '#C72F23',
    },
    extend: {
      boxShadow: {
        'brutal': '2px 2px',
      }
    },
  },
  plugins: [],
}

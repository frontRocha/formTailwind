/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#6A70FF',
          200: '#0A70FF'
        } 
      }
    },
  },
  plugins: [],
}

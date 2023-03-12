/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'header-color':'#234EE8',
        'header-color2':'#597BF7',
        'font-color-1':'#FFFFFF'
      }
    },
  },
  plugins: [],
}

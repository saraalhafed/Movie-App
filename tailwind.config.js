/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-dark-main': '#23242a',
        'gray-dark-second': '#28292d',
        'gray-light': '#d3dce6',
        'red-main': '#ff4b45',
      }
    },
  },
  plugins: [],
  darkMode: 'class',/* selector,media : to toggle between 2 differant style here in our App we need to toggle between dark and light mode (bg,textcolor)it can be any thing*/
}


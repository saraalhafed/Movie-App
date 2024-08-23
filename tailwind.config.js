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
  darkMode: 'class',
}


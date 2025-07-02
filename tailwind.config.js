/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{njk,html}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '15px',
      },
      colors: {
        accent: '#9de518'
      },
    },
  },
  plugins: [],
}




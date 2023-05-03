/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      
      color:{
      'light-coffee': '#C89F94'
    }
    },
  },
  plugins: [],
}


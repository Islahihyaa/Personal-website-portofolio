/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        sans: [
          '"Mitr", sans-serif',
        ],
      },
      colors: {
        'primary': '#53CCEC',
        'secondary' : '#DEF4FA'
      },
      screens : {
        '2xl': '1320px',
      }
    },

  },
  plugins: [],
}


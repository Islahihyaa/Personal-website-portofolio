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


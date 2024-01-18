/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/bg-navbar.png')",
      },
      fontFamily: {
        sans: [
          '"Mitr", sans-serif',
        ],
      },
      colors: {
        'regal-blue': '#53CCEC',
      },
    },

  },
  plugins: [],
}


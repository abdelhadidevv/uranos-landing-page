/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('images/hero.png')",
      },
      colors:{
        "light-white":'rgba(var(--color-light-white) , 0.0001)',
        "main-yellow":"#FFD800",
        "light-yellow":"#FFE347",
        "main-black":"#191B29",
        "light-gray":"#9D9FBF",
        "black-text":"#191B29"
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

  },
  plugins: [],
}
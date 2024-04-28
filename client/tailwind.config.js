/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "lexend": ["Lexend", "sans-serif"],
      "lexend-deca" : ["Lexend Deca", "sans-serif"],
      "lexend-exa" : ["Lexend Exa", "sans-serif"],
      "lexend-giga" : ["Lexend Giga", "sans-serif"],
      "lexend-mega" : ["Lexend Mega", "sans-serif"],
      "lexend-peta" : ["Lexend Peta", "sans-serif"],
      "lexend-tera" : ["Lexend Tera", "sans-serif"],
      "lexend-zetta" : ["Lexend Zetta", "sans-serif"],
    },
    zIndex: {
      '100': '100',
    }
  },
  plugins: [],
}
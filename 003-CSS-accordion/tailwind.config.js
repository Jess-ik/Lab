/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        red: ['"Red Hat Text"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
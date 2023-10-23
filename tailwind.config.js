/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Cormorant Garamond, serif',
        paragraph: 'Satisfy, cursive' ,
        pacifico: 'Pacifico, cursive',
      }
    },
  },
  plugins: [require("daisyui")],
}
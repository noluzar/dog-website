/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto", "sans-serif"],
        bowlby: ["Bowlby One", "sans-serif"],
      },
        },
    },
      
  plugins: [],
}
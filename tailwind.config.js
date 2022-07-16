/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
          colors: {
            softBlue: 'hsl(231, 69%, 60%)',
            softRed: 'hsl(0, 94%, 66%)',
            grayishBlue: 'hsl(229, 8%, 60%)',
            veryDarkBlue: 'hsl(229, 31%, 21%)',
          },
          fontFamily:{
            sans: ['Rubik', 'sans-serif'],
            
          }
        },
  },
  plugins: [],
}

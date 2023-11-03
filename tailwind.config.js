/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily : {
      "Poppins" : ["Poppins"]
    },
    letterSpacing : {
      norm : "0.5px",
      norm_mn : "1px",
      norm_mx : "1.5px"
    }
  },
  plugins: [],
}

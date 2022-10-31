/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        ptSans: ["PT Sans", "sans-serif"],
      },
      boxShadow: {
        'banner': '180px 30px 140px 0px ;',
        'favChannel': '0px 0px 10px 2px ;',
      }
    },
  },
  plugins: [],
}

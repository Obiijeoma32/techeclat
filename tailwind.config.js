/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "3xxl": "300px",
        "4xxl": "400px",
        "820xxl": "820px",
        "1xl": "1080px",
        "1halfxl": "1150px",
        "2xl": "1440px",
        "3xl": "1600px",
        "6xl": "1700px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
    },
  },
  plugins: [],
};

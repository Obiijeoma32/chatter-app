/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xxl": "300px",
        "4xxl": "400px",
        "5xxl": "500px",
        "6xxl": "600px",
        "7xxl": "700px",
        "820xxl": "820px",
        "10inch": "960px",
        "1xl": "1050px",
        "1halfxl": "1150px",
        "13inch": "1248px",
        "14inch": "1320px",
        "2xl": "1440px",
        "3xl": "1600px",
        "6xl": "1700px",
        "4xl": "1920px",
        "5xl": "2555px",
      },
    },
  },
  plugins: [],
};

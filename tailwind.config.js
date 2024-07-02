/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGray: "#4D4D4D",
        brandPrimary: "#D14d72",
        neutralGray: "#717171",
        gray900: "#717171",
        logo:"#304F6E",
        backgroundImg:"rgba(209, 77, 114, 0.66)"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

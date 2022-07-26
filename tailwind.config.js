/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { Open: "Open Sans" },
    fontSize: {
      xs: "0.75rem",
      lg: "1.25rem",
      "4xl": "2.25rem",
      xxl: "5rem",
    },
    lineHeight: { big: "6rem" },
    colors: {
      pink: "#d70f64",
      white: "#ffffff",
      blackG: "#333333",
      gray: colors.coolGray,
    },
    extend: {},
  },
  plugins: [],
};

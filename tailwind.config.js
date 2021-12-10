const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: [
          ".625rem",
          {
            letterSpacing: "0.02em",
          },
        ],
      },
    },
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
      cyan: colors.cyan,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
};

/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        moveUp: "1s line-forward",
        moveUp: {
          "0%": { "margin-top": "40px", opacity: 0 },
          "50%": { "margin-top": "20px", opacity: 0.1 },
          "100%": { "margin-top": "0px", opacity: 1 },
        },
      },
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "30px",
        md: "50px",
      },
    },
    fontFamily: {
      lobster: ["Lobster", "serif"],
      jost: ["Jost", "serif"],
    },
  },
  plugins: [rotateY],
};

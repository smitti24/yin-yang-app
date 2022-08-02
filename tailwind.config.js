/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      pixel: ["player2p"],
      default: "default",
    },
    extend: {
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        wave: {
          "0%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        wavey: "wave 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
});

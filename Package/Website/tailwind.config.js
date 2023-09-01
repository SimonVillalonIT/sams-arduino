/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["emerald", "night"],
  },
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "90%": { opacity: "1" },
          "99%": { opacity: "0" },
          "100%": { opacity: "0", display: "none" },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft .5s forwards",
        fadeOut: "fadeOut 5s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};

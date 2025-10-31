/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E1D33",
        gold: "#D9B97C",
        lightgold: "#EBD9A9",
        offwhite: "#F5F5F5",
      },
      backdropBlur: {
        sm: "4px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

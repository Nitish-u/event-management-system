/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "270px",
      },
      keyframes: {
        scrollALittle: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "scrollALittle" : "scrollALittle 1s ease-in-out"
      }
    },
  },
  plugins: [],
};

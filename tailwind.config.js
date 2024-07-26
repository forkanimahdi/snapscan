/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alpha: "#0a1826",
        beta: "#1f2d3a",
        main: "#f2c94c",

      },
    },
  },
  plugins: [],
};

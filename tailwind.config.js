/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3A00B0",
          300: "#29007D",
          900: "#120037",
        },
      },
    },
  },
  plugins: [],
};

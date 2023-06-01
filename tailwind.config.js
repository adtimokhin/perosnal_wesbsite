/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#170D00",
          200: "#4C2B00",
          300: "#BB6B00",
          400: "#D97B00",
          500: "#EB8500",
          600: "#FF9100",
          700: "#f5b45f",
          800: "#ffebd1",
        },
      },
      textColor: {
        light: "#ffebd1",
        dark: "#170D00",
      },
    },
    fontFamily: {
      body: ["Lexend", "sans-serif"],
      display: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};

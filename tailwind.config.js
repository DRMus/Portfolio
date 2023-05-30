/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "portfolio-bg": "#0d0d0d",
        "portfolio-white": "#f1f5f9",
        "portfolio-purple": "#7e22ce",
      },
      width: {
        "portfolio-main": "1300px"
      },
      height: {
        "portfolio-block": "100vh"
      },

    },
  },
  plugins: [],
};

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
      boxShadow: {
        "portfolio-purple": "0 0 20px rgba(126, 34, 206, 0)"
      }

    },
  },
  plugins: [],
};

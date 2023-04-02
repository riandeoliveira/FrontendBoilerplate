/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#006aeb",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
      screens: {
        desktop: "2560px",
        "laptop-l": "1440px",
        "laptop-m": "1280px",
        "laptop-s": "1024px",
        "tablet-l": "900px",
        "tablet-m": "768px",
        "tablet-s": "600px",
        "mobile-l": "425px",
        "mobile-m": "375px",
        "mobile-s": "320px",
      },
    },
  },
  plugins: [],
};

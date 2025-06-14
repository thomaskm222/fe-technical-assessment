/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "#E6E6E6",
          20: "#A1A1A1",
          30: "#565656",
          40: "#ECEDEF",
        },
        purple: {
          10: "#ADABFF",
        },
      },
    },
  },
  plugins: [],
};

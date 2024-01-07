/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cBg: "#fff4e6",
        cText: "#495057",
        cPrimary: "rgb(255, 169, 77)",
        cSecondary: "rgb(255, 146, 43)",
      },
    },
  },
  plugins: [],
};

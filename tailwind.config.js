/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f1faee",
        blue: "#1D3557",
      },
      fontFamily: {
        circular: ["CircularStd"],
        openSans: ["openSans"],
        DMSans: ["DMSans"],
        monaSans: ["monaSans"],
      },
    },
  },
  plugins: [],
};

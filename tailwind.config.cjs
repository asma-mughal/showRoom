/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F6F7F9",
        secondary: "#1B1B42",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimYellow: "#482D70",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
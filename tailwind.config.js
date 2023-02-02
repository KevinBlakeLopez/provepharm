/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./wp-templates/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        "extra-tight": "1.125",
      },
      colors: {
        primary: "#1e387d",
        //secondary is used for buttons
        secondary: "#00a6e7",
        tertiary: "#2ac3ff",
        navHover: "#0070ba",
        buttonHover: "#007bff",
        anchor: "#0071b3",
        hoverAnchor: "#0d6efd",
        prescribingAnchor: "#ffc107",
        bludigo: "#4f157e",
        icon: "#1601ff",
        stockPhoto: "#104656",
      },
    },
  },
  plugins: [],
};

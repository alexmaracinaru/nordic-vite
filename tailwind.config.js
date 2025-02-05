/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Familjen Grotesk", "sans-serif"],
        serif: ["Domine", "serif"],
      },
      colors: {
        primary: "#EF3B33",
        lightBeige: "#FFF6EE",
        beige: "#F4EAE1",
        navy: "#1D1842",
        muted: "#A29AA5",
        lightMuted: "#E4DBD3",
      },
      maxWidth: {
        "9xl-custom": "120rem",
        "8xl-custom": "105rem",
        "7xl-custom": "90rem",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        min1800: { min: "1800px" },
        max1540: { max: "1540px" },
        max1370: { max: "1370px" },
        max1420: { max: "1420px" },
        max1200: { max: "1200px" },
        max1024: { max: "1024px" },
      },
    },
  },
  plugins: [],
};

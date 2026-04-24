/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-gold": "#C5A07F",
        "brand-dark": "#2D2926",
        "brand-cream": "#F9F5F0",
      },
    },
  },
  plugins: [],
};

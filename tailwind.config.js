/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      cursor: {
        CustomLight: 'url(src/assets/cursor-light.svg), auto',
        CustomDark: 'url(src/assets/cursor-dark.svg), auto'
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      cursor: {
        'cursor-light': 'url(src/assets/cursor-light.svg), pointer',
        'cursor-dark': 'url(src/assets/cursor-dark.svg), pointer'
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-color': '#f9faf4',
        'primary-color': '#ffc94b',
        'secondary-color': '#4a6163',
        'hover-color': '#f17a7e',
      },
    },
  },
  plugins: [],
};

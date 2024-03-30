/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        strongWhite: '#f7f2e9',
        primaryColor: '#EDC84B',
        transparent: 'transparent',
        current: 'currentColor',
      },
      fontFamily: {
        sans: ['Roboto Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

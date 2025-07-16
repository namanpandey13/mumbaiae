/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#053264',
        secondary: '#118282',
        'primary-light': '#0a4a8a',
        'secondary-light': '#15a0a0',
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '489px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      superDark: '#111',
      normalDark: '#232323',
      gray: '#333',
      redColor: '#ff0000',
      superLightGray: '#fafafa',
      whiteColor: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

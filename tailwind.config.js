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
      superDark: '#212121',
      normalDark: '#232323',
      gray: '#6e6e6e',
      red: '#ff0000',
      superLightGray: '#fafafa',
      white: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

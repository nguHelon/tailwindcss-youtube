/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '489px',
      md: '768px',
      lg: '976px',
      xl: '1224px'
    },
    colors: {
      superDark: '#111',
      normalDark: '#232323',
      normalgray: '#333',
      border: '#444',
      redColor: '#ff0000',
      textcolor: '#8e8e8e',
      superLightGray: '#fafafa',
      whiteColor: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

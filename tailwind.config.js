module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
      textColor: ['visited'],
    },
  },
  plugins: [],
}

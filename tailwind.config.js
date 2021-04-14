module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cwc: {
          dark: '#2C2924',
          primary: '#EE8704',
          gray: '#222222',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
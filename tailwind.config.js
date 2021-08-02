module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '350px',
      lg: '1024px',
      desktop: '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

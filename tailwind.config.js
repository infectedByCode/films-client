module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    screens: {
      mobile: '320px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {}
  },
  variants: {
    extend: {
      inset: ['focus']
    }
  },
  plugins: []
};

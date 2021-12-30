module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      dark: '#212121',
      darkish: '#333333',
      gradblue: '#293240',
      gradmag: '#361329',
      ligray: '#f2f2f2',
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

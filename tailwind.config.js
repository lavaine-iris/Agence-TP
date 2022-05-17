module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { indigo: { '25': '#f7f7fd' } },
      fontSize: { base: '1rem', lg: '1.5rem' },
      fontFamily: { inter: 'Inter, sans-serif', oswald: 'Oswald' },
      borderRadius:
      {
        none: '0',
        xs: '0.1875rem',
        sm: '0.3125rem',
        default: '0.5rem',
        lg: '1rem',
        xl: '2.1875rem'
      }
    },
  },
  plugins: [],
}

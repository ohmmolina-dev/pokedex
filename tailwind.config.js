module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#12121a'
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
        'pokefont': 'Pokemon Solid, sans-serif',
      },
    },
  },
  plugins: [],
}

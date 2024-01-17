/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        backgroundPrimary: '#F8E8E1',
        BackgroundWhite: '#FAFAFA',
        primaryYellow: '#EEB949',
        primaryred: '#D63A1F',
      },
      screens: {
        'xr': '390px',
      },
    },
  },
  plugins: [],
}
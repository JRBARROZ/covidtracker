module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-background': "url('Assets/Images/Slide-Back.png')",
      }),
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors:{
        titleGray:{
          DEFAULT: "#003838"
        },
        subtitleGreen:{
          DEFAULT:"#53C8A4"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

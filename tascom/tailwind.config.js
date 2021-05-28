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
      },
      keyframes : {
        slideLeft : {
          'from':{opacity: 0,transform: 'translateX(-30px)' },
          'to': {opacity: 1, transform: 'translateX(0px)'}
        },
        emerge:{
          'from':{opacity: 0},
          'to': {opacity: 1}
        }
      },
      animation:{
        slideLeft: 'slideLeft .3s forwards ease',
        emerge: 'emerge .3s forwards ease',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

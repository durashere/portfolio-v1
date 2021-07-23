module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/home.svg')",
        'home-sm': "url('/home-sm.svg')",
      }),
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideInTop: {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInBottom: {
          '0%': {
            transform: 'translateY(50%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(-50%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s forwards',
        'fade-in-delay-1': 'fadeIn 2s 1s forwards',
        'fade-in-delay-3': 'fadeIn 2s 3s forwards',
        'slide-in-top-delay-5': 'slideInTop 2s 5s forwards',
        'slide-in-bottom-delay-5': 'slideInBottom 2s 5s forwards',
        'slide-in-left': 'slideInLeft 2s forwards',
        'slide-in-left-delay-1': 'slideInLeft 2s 1s forwards',
        'slide-in-left-delay-2': 'slideInLeft 2s 2s forwards',
        'slide-in-left-delay-3': 'slideInLeft 2s 3s forwards',
        'slide-in-left-delay-4': 'slideInLeft 2s 4s forwards',
        'slide-in-left-delay-6': 'slideInLeft 2s 6s forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

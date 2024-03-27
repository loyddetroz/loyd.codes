/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}', './src/*.ts'],
  theme: {
    extend: {
      colors: {
        blue: '#4575F6',
        white: '#F4FAFF',
      },
      fontFamily: {
        monospace: ['Red Hat Mono'],
      },
      fontSize: {
        '15xl': '14rem',
      },
    },
  },
  plugins: [],
};

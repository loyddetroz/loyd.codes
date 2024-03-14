/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      gridAutoColumns: {
        '2auto': 'auto auto',
      },
    },
  },
  plugins: [],
};

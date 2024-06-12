/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/images/a.s.k-meet-1.jpg')",
      },
      height: {
        'screen-minus-navbar': 'calc(100vh - 100px)', // Adjust this value based on your navbar height
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


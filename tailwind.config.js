/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        shadow: '#0e1012',
        royal: '#1a4572',
        black: '#000000',
        pale: '#f3f6fa',
        periwinkle: '#e8e5f0',
        white: '#ffffff',
      },
      fontFamily: {
        custom: ['customFont', 'sans-serif'],
        custom2: ['customFont2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

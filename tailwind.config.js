/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('Laut.jpg')",
      },
      height: {
        '125':'32rem',
        '126':'48rem',
        '128':'52rem'

      },
    },
  },
  plugins: [],
};

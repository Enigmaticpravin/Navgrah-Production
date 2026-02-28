/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navPink: "#C21884",
        navMagenta: "#9C1B6B",
        navLightPink: "#E87BB2",
        navDark: "#1a1a1a",
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(to right, #C21884, #9C1B6B)',
      }
    },
  },
  plugins: [],
}
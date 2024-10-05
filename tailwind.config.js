/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jost': ['"Jost"', "sans-serif"],
      'inter': ["Inter", "sans-serif"],
      'open': ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        'primary': '#231656',
        'secondary': '#625FFB',
        'content': '#4E4E4E',
        'base': '#F5F5F5',
        'gray-bg': '#F8F8F8',
      },
      backgroundImage: {
        'home-main': "url(./src/assets/images/background-home.png)"
      }
    }
  },
  plugins: [],
}


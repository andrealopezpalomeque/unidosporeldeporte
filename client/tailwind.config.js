/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fcfcfc',
        dark: '#4a4d55',
        slate: '#647189',
        blue: '#7e96be',
        accent: '#F4A261',
        light: '#98bbf3',
      },
      fontFamily: {
        logo: ['"BIZ UDPGothic"', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

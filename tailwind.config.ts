module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  darkMode: ['class'/* , '[data-theme="dark"]' */],
  theme: {
    extend: {
      colors: {
        'primary-light': '#c026d3',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',
        'bg-primary-light': '#f9fafb',

        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',
        'bg-primary-dark': 'rgb(17 24 39 / 1)'
      }
    }
  },
  plugins: []
}

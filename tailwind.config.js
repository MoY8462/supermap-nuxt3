/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFE4E2"
        },
        "red-orange": {
          DEFAULT: "#FF671B"
        },
        sienna: {
          DEFAULT: "#CC5216"
        },
        burgundy: {
          DEFAULT: "#900300"
        }
      }
    },
  },
  plugins: [
    require("./assets/theme/base"),
  ],
}
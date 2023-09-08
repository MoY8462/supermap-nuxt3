// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "This My App",
      link: [
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css",
          rel: "stylesheet"
        },
        {
          href: "https://iclient.supermap.io/dist/leaflet/iclient-leaflet.min.css",
          rel: "stylesheet"
        },
        {
          href: "https://iclient.supermap.io/web/libs/leaflet/plugins/leaflet.draw/1.0.4/leaflet.draw.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.css",
          rel: "stylesheet"
        }
      ],
      script: [
        {
          src:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"
        },
        {
          src: "https://iclient.supermap.io/dist/leaflet/iclient-leaflet.js"
        },
        {
          src:"https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.2/leaflet.draw.js"
        },
        {
          src:"https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.min.js"
        }
      ]
    }
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

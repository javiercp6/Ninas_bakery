// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "Ninas Bakery",
          content:
            "Ninas Bakery offers the bestcakes and sweets for you",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.png" }],
    },
  },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/image'],
    colorMode: {
        classSuffix: ''
      }
})

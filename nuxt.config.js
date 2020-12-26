export default {
  ssr: false,
  target: 'static',
  head: {
    title: "Quelchlax Tech",
    titleTemplate: "Eric Quelch - Full Stack Javascript Web Developer",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "Quelchlax Portfolio",
        name: "Eric Quelch - Full Stack Javascript Developer and Web Development Student",
        content:
          "Eric Quelch is a web development student and full stack javascript developer in training. Currently living in London Ontario Canada"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: "#008776", height: "1px" },
  components: true,
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}

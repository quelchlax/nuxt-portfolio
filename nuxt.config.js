export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'quelchlax.tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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

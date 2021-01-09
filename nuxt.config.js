export default {
  target: "static",
  ssr: false,
  head: {
    title: "quelchlax.dev",
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
        hid: "quelchlax.dev",
        name:
          "Eric Quelch - Full Stack Javascript Developer and Web Development Student",
        content:
          "Eric Quelch is a web development student and full stack javascript developer in training. Currently living in London Ontario Canada"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["@/assets/scss/style.scss"],

  loading: { color: "#008776", height: "1px" },
  components: true,
  modules: [
    "@nuxtjs/bulma",
    "@nuxtjs/dotenv",
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxt/content"
  ],
  pwa: {
    icon: {
      iconFileName:
        process.env.NODE_ENV === "staging" ? "logo.png" : "favicon.ico"
    }
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
};

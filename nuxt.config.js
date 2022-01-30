export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Real World Clone",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Template for learn Nuxt 2",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        href: "~/assets/fonts/OpenSans-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
      {
        rel: "preload",
        href: "~/assets/fonts/OpenSans-Light.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
      {
        rel: "preload",
        href: "~/assets/fonts/OpenSans-Bold.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["normalize.css", "~/assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    "@nuxtjs/style-resources",
  ],

  styleResources: {
    scss: ["~/assets/styles/_variables.scss", "~/assets/styles/_mixins.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

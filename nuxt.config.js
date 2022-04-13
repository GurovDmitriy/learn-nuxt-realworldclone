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
      // {
      //   rel: "preload",
      //   href: "~/assets/fonts/OpenSans-Regular.woff2",
      //   as: "font",
      //   type: "font/woff2",
      //   crossorigin: true,
      // },
      // {
      //   rel: "preload",
      //   href: "~/assets/fonts/OpenSans-Light.woff2",
      //   as: "font",
      //   type: "font/woff2",
      //   crossorigin: true,
      // },
      // {
      //   rel: "preload",
      //   href: "~/assets/fonts/OpenSans-Bold.woff2",
      //   as: "font",
      //   type: "font/woff2",
      //   crossorigin: true,
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["normalize.css", "~/assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios", "~/plugins/api", "~/plugins/filter"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/style-resources",
    "@aceforth/nuxt-optimized-images",
    "@nuxtjs/svg-sprite",
  ],

  optimizedImages: {
    optimizedImages: {
      inlineImageLimit: 1000,
      imagesName: ({ isDev }) =>
        isDev
          ? "[path][name][hash:optimized].[ext]"
          : "img/[contenthash:7].[ext]",
      responsiveImagesName: ({ isDev }) =>
        isDev
          ? "[path][name]--[width][hash:optimized].[ext]"
          : "img/[contenthash:7]-[width].[ext]",
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      optimizeImages: true,
      optimizeImagesInDev: false,
      defaultImageLoader: "responsive-loader",
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
        // enable/disable svgo plugins here
      },
      webp: {
        preset: "default",
        quality: 75,
      },
    },
  },

  svgSprite: {
    // manipulate module options
  },

  styleResources: {
    scss: ["~/assets/styles/_variables.scss", "~/assets/styles/_mixins.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://localhost:3005",
  },

  // pageTransition: {
  //   name: "page",
  //   mode: "out-in",
  // },

  // layoutTransition: {
  //   name: "layout",
  //   mode: "out-in",
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

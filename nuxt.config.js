export default {
  target: "server",
  ssr: true,

  loadingIndicator: {
    name: "circle",
    color: "#7c728d",
    background: "white",
  },

  loading: {
    color: "#7c728d",
    height: "4px",
  },

  // serverMiddleware: ["~/server-middleware/logger"],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "RWC: %s",
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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        "postcss-url": false,
        // "postcss-nested": {},
        // "postcss-responsive-type": {},
        // "postcss-hexrgba": {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
}

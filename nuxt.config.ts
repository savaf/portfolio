const isDev = process.env.NODE_ENV === "development";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    viewTransition: true,
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/eslint-module",
    // "@nuxtjs/partytown",
    "nuxt-gtag",
  ],

  routeRules: {
    "/**": isDev
      ? {}
      : {
          // isr: 60,
          cache: {
            swr: true,
            maxAge: 120,
            staleMaxAge: 60,
            headersOnly: true,
          },
        },
    // "/": isDev
    //   ? {}
    //   : {
    //       prerender: true,
    //     },
    // "/api/*": isDev
    //   ? {}
    //   : {
    //       cache: { maxAge: 60 * 60 },
    //     },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    isProd: import.meta.env.NODE_ENV === "production",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
      gtagId: "G-1ZQZQZQZQZ",
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Sinver Aguiló",
      htmlAttrs: { lang: "en" },
      meta: [
        // SEO meta tags
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: "" },
        { name: "format-detection", content: "telephone=no" },
        { name: "description", content: "Hi, I'm Sinver Aguiló, web developer in Santo Domingo, República Dominicana." },
      ],
      link: [
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/images/logo.png",
        },
      ],
      script: [
        // { children: "window.$plausible = [];" },
        // {
        //   defer: true,
        //   src: "https://plausible.io/js/plausible.js",
        //   type: "text/partytown",
        //   "data-domain": "https://www.sinveraguilo.com",
        // },
      ],
    },
  },

  image: {
    format: ["webp"],
    // domains: isDev ? ["localhost"] : ["sinveraguilo.com"],
  },

  css: ["~/assets/styles/main.scss"],

  components: true,

  tailwindcss: {
    cssPath: "~/assets/styles/tailwind.scss",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: true,
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      "Flow+Circular": [400],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
  },

  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
    aliases: {
      // 'nuxt': 'logos:nuxt-icon',
    },
  },

  device: {
    refreshOnResize: true,
  },

  content: {
    // ... options
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    dataValue: "theme",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "sinveraguilo-nuxt-color-mode",
  },

  eslint: {
    /* module options */
  },

  partytown: {
    forward: ["$plausible", "$plausible.push"],
  },

  gtag: {
    // initialConsent: true,
  },
});

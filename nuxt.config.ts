// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },

  devtools: {
    enabled: true
  },

  typescript: {
    shim: false
  },

  modules: [
    'nuxt-headlessui',
    '@nuxt/ui',
    // '@nuxtjs/tailwindcss', commented out because it's not needed with @nuxt/ui
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'Sinver Aguilo',
      htmlAttrs: { lang: 'en' },
      meta: [
        // SEO meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/logo.png',
        }
      ],
      script: [],
    },
  },

  image: {
    format: ['webp'],
    // domains: isDev ? ["localhost"] : ["<domain>"],
  },

  ui: {
    icons: ['heroicons', 'simple-icons', 'lucide', 'line-md']
  },

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },

  headlessui: {
    prefix: 'HUI'
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Flow+Circular': [400],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
  },
})

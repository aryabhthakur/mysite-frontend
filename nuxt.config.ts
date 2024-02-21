// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sitemap: {
    enabled: true
  },
  schemaOrg: {
    enabled: true
  },
  ogImage: {
    enabled: true
  },
  seo: {
    fallbackTitle: true
  },
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '-'
      }
    }
  },
  site: {
    url: 'https://aryabh.com',
    name: 'Aryabh',
    description: 'Hi, I am Aryabh. Welcome to my portfolio / blog / showcase site.',
  },
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      GITHUB_URL: process.env.GITHUB_URL,
      TWITTER_URL: process.env.TWITTER_URL,
      DRIBBBLE_URL: process.env.DRIBBBLE_URL,
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts', "@nuxt/image","@vueuse/motion/nuxt","nuxt-icon","@nuxtjs/seo"],
  css: ['~/assets/css/main.css'],
  googleFonts:{
    preconnect: true,
    prefetch: true,
    preload: true,
    download:false,
    useStylesheet: true,
    families: {
      Inter: ['100','200','300','400','500','600','700','800','900'],
    },
    outputDir:'assets/fonts'
  },
  vite: {
    server: {
      watch:{
        usePolling: true,
      } ,
        hmr: {
          protocol: "ws",
          host: "localhost",
        }
    }
},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content:{
    documentDriven: true,
    sources:{
      content: {
        driver: 'fs',
        prefix: '/article',
        base: __dirname + '/content'
      },
      data:{
        driver: "fs",
        base: __dirname + "/data"
      }
    }
  }
})

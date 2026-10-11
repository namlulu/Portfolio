import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static', // 정적 웹사이트임을 명시
  router: {
    base: '/Portfolio/' // github repository 이름 넣기
  },
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Namlulu - Cloud Architect',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        hid: 'description',
        content:
          'Cloud Architect & MLOps engineer. Designs hybrid cloud (VMware, AWS, GCP, Azure) architectures, Kubernetes platforms and GPU-based MLOps, backed by cost and reliability.'
      },
      {
        name: 'keywords',
        content: 'Cloud Architect, Hybrid Cloud, MLOps, SRE, DevOps, Kubernetes'
      },
      {
        name: 'og:title',
        content: 'Namlulu - Cloud Architect'
      },
      {
        name: 'og:description',
        content:
          'Cloud Architect & MLOps engineer. Designs hybrid cloud (VMware, AWS, GCP, Azure) architectures, Kubernetes platforms and GPU-based MLOps, backed by cost and reliability.'
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://namlulu.github.io/Portfolio' },
      {
        name: 'og:image',
        content:
          'https://avatars.githubusercontent.com/u/60912642?s=400&u=85f5214a3f5234494f39b0619ab5c6ed8427aaae&v=4'
      },
      {
        name: 'google-site-verification',
        content: 'Tejxa2jUd4qoP0nqt0tZpMWb0WzqyetbFIAz7aqindU'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        // src: 'drift.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#02f3e6',
    background: '#131313'
  },

  /*
   ** Global CSS
   */
  css: ['aos/dist/aos.css', '~/assets/font/biko.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/typed', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vue-waypoint', ssr: false },
    { src: '~/plugins/carousal', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@neneos/nuxt-animate.css',
    'vue-scrollto/nuxt'
  ],
  gtm: {
    id: 'GTM-THBKKFM'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/main.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#232020'
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Namlulu'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

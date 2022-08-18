export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Nuxtjs Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nextjs data fetching example with axios in async and mounted' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  axios: {},
  build: {
  }
}

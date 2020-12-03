export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'guangxinna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // 'element-ui/lib/theme-chalk/button.css',
    // 'element-ui/lib/theme-chalk/input.css',
    // 'element-ui/lib/theme-chalk/select.css',
    // 'element-ui/lib/theme-chalk/option.css',
    // 'element-ui/lib/theme-chalk/checkbox.css',
    // 'element-ui/lib/theme-chalk/radio.css',
    // 'element-ui/lib/theme-chalk/date-picker.css',
    // 'element-ui/lib/theme-chalk/cascader.css',
    // 'element-ui/lib/theme-chalk/form.css',
    // 'element-ui/lib/theme-chalk/form-item.css',
    './assets/style/global.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //'@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/, /vant.*?less/],
    babel: {
      plugins: [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ],
        [
          'import',
        {
          libraryName: 'vant',
          style: (name) => {
            return `${name}/style/less.js`
          }
        },
          'vant'
        ],
      ]
    }
  }
}

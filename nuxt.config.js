import path from 'path'
import Mode from 'frontmatter-markdown-loader/mode'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient }) {
      // remove existing url-loader settings once, for giving svg specific loader
      const rule = config.module.rules.find((r) =>
        r.test.toString().includes('(png|jpe?g|gif|svg|webp)')
      )
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'contents'),
          options: {
            // mode: [Mode.HTML, Mode.VUE_RENDER_FUNCTIONS],
            mode: [Mode.VUE_COMPONENT, Mode.HTML, Mode.VUE_RENDER_FUNCTIONS]
            // vue: {
            //   root: 'dynamicMarkdown'
            // }
          }
        }
        // {
        //   ...rule,
        //   test: /\.(png|jpe?g|gif|webp)$/
        // },
        // {
        //   test: /\.svg$/,
        //   loader: 'svg-sprite-loader',
        //   include: path.resolve(__dirname, 'assets/icons')
        // }
      )
    }
  }
}

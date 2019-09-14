const DEV = 'development'
const isDev = process.env.NODE_ENV === DEV

module.exports = {
  configureWebpack: {
    devtool: isDev ? 'source-map' : false
  },

  publicPath: '/',
  productionSourceMap: false,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}

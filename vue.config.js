const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  configureWebpack: {
    devtool: isDev ? 'source-map' : false
  },

  publicPath: '',
  productionSourceMap: false

  /*
  transpileDependencies: [
    'vuetify'
  ]
  */
}

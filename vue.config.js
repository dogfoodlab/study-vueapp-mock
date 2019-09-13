const DEV = 'development'
const isDev = process.env.NODE_ENV === DEV

module.exports = {
  configureWebpack: {
    devtool: isDev ? 'source-map' : false
  },
  publicPath: '/',
  productionSourceMap: false
}

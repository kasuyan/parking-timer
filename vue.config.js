const configureWebpack = require('./webpack.config')

module.exports = {
  publicPath: process.env.VUE_APP_ASSETS_PATH,
  configureWebpack
}
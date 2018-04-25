const path = require('path')
const utils = require('./utils')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')
const merge = require('webpack-merge')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

const baseConfig = require('./webpack.base.conf')

const plugins = [
  new VueServerPlugin(),
  new ExtractTextPlugin({
    filename: utils.assetsPath('css/[name].[contenthash].css'),
    // Setting the following option to `false` will not extract CSS from codesplit chunks.
    // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
    // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
    // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
    allChunks: true,
  }),
  new webpack.DefinePlugin({
    'process.env.VUE_ENV': '"server"'
  })
]

module.exports = merge(baseConfig, {
  target: 'node',
  entry: path.resolve(__dirname, '../src/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-build.js',
    path: path.resolve(__dirname, '../server-build')
  },
  // optimization: { // webpack4的配置，可以代替ExtractTextPlugin
  //   splitChunks: false
  // },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  plugins
})

const webpackMerge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const getBaseConfig = require('./webpack.base.config')

function getProdConfig() {
  const webpackBaseConfig = getBaseConfig(true)

  return webpackMerge(webpackBaseConfig, {
    mode: 'production',

    optimization: {
      minimize: false // 取代插件中的 new webpack.NamedModulesPlugin()
    },

    // devtool: false,

    // performance: {
    //   hints: 'warning',
    //   maxAssetSize: 300000, // 单文件超过250k，命令行告警
    //   maxEntrypointSize: 300000, // 首次加载文件总和超过250k，命令行告警
    // },

    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       // 开启多线程并行
    //       parallel: true,
    //     }),
    //     // new OptimizeCSSAssetsPlugin()
    //   ],
    //   noEmitOnErrors: true,
    // },

    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  })
}

module.exports = getProdConfig

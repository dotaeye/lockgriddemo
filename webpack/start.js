const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const getDevConfig = require('./webpack.dev.config')
const pkg = require('../package.json')

const port = pkg.port || 4100

const options = {
  contentBase: path.join(__dirname, '../dist'),
  host: '0.0.0.0',
  stats: { colors: true },
  hot: true,
  noInfo: false
}

const webpackConfig = getDevConfig()

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options)

const compiler = webpack(webpackConfig)
const server = new WebpackDevServer(compiler, options)

server.listen(port, '0.0.0.0', err => {
  if (err) {
    console.error(err)
  }
  console.log('\n-------------\n')
  console.log(`http://127.0.0.1:${port}/index.html`)
})

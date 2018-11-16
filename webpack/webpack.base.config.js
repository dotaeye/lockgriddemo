const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const { resolve } = require('./utils')

const devMode = process.env.NODE_ENV === 'development'
const getCssLoader = isModuleCss => {
  const cssLoaders = [
    { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
    {
      loader: 'css-loader',
      options: isModuleCss
        ? {
          modules: false
        }
        : {
          modules: true,
          importLoaders: 1,
          localIdentName: devMode
              ? '[path]_[name]__[local]___[hash:base64:8]'
              : '[hash:base64:8]'
        }
    }
  ]

  const extLoaders = [
    {
      loader: 'px2rem-loader',
      options: {
        remUnit: 37.5,
        remPrecision: 8
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.join(__dirname, '../webpack/postcss.config.js')
        }
      }
    }
  ]

  return isModuleCss ? cssLoaders : cssLoaders.concat(extLoaders)
}

const lessLoader = getCssLoader().concat({ loader: 'less-loader' })

// , isCDN = 'no'
function getCommonConfig() {
  const plugins = [
    new CleanWebpackPlugin([`dist`], {
      root: path.resolve(__dirname, '..')
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].[hash:4].css`,
      chunkFilename: `css/[id].[hash:4].css`
    }),
    // new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]

  // if (!isProd) {
  plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `client/index.html`
    })
  )
  // }
  return {
    entry: {
      app: `./client/index.js`
    },

    output: {
      path: resolve('dist/'),
      publicPath: '',
      filename: `js/[name].[hash:4].js`,
      chunkFilename: `js/[name].chunk.js`
    },

    resolve: {
      extensions: ['*', '.js', '.jsx']
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [resolve('client')],
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          include: [resolve('client')],
          use: getCssLoader()
        },
        {
          test: /\.less$/,
          include: [resolve('client')],
          use: lessLoader
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: `img/[name].[hash:4].[ext]`
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            limit: 8192,
            name: `img/[name].[hash:4].[ext]`
          }
        },
        {
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          loader: 'file-loader',
          options: {
            name: `img/[name].[hash:4].[ext]`
          }
        }
      ]
    },

    plugins
  }
}

module.exports = getCommonConfig

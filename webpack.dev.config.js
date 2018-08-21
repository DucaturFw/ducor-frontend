const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin, DefinePlugin, EnvironmentPlugin } = require('webpack')

require('dotenv').config()

module.exports = {
  entry: {
    vendor: [ 'react', 'react-dom', 'emotion', 'react-emotion' ],
    app: './src/app.tsx'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  performance: {
    hints: false,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        } ],
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              noquotes: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [ '.tsx', '.ts', '.js' ],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
  plugins: [
    new EnvironmentPlugin(['DUCOR_API_URL', 'DUCOR_API_PORT']),
    new CleanWebpackPlugin([ 'dist' ]),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'src/index.html'
    }),
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify('true')
      }
    }),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  },
  target: 'web',
  stats: {
    assets: false,
    modules: false
  }
}

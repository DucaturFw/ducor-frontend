const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { HashedModuleIdsPlugin } = require('webpack')

module.exports = {
  entry: './src/app.tsx',
  mode: 'production',
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
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [ '.tsx', '.ts', '.js' ],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
  plugins: [
    new CleanWebpackPlugin([ 'build' ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
  ],
  output: {
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    splitChunks: { chunks: 'all' },
    runtimeChunk: true
  },
  target: 'web',
  stats: {
    assets: false,
    modules: false
  }
}

var path = require('path')
var config = require('../config')
var projectRoot = path.resolve(__dirname, '../')
var config = require('../config')

// TODO: should update webpack@1.x to webpack2 and change some configure
// TODO: find out how 'to use fallback'
// TODO: use 'cssnano' to config style loader with postcss
module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    app: config.entry
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    chunkFilename: '[chunkhash].js',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'utils': path.resolve(__dirname, '../src/utils'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel?presets[]=es2015&presets[]=react',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.join(config.build.assetsSubDirectory, '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // TODO: should config some global via
    }),
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
};

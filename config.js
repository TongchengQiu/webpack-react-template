// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');

module.exports = {
  entry: './src/main.js',
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 8080,
    mockPort: 8888,
    proxyTable: {
      '/api': 'localhost:8888'
    }
  }
};

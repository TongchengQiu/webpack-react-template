# PROJECT

## Environment

```
node >= 4
npm
```

## Code Style

https://github.com/airbnb/javascript

## Before
```
npm install -d
```

## config

```javascript
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');

module.exports = {
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
```

## Develop

```
npm run dev
```

访问 http://127.0.0.1:8081

## Build

```
npm run build
```

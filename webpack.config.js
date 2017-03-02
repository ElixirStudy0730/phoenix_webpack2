/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./build/webpack.prod.conf');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./build/webpack.test.conf');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./build/webpack.dev.conf');
}

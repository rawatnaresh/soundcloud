if (process.env.NODE_ENV === 'production') {
  //  eslint-disable-next-line
  module.exports = require('./configureStore.dev');
} else {
  //  eslint-disable-next-line
  module.exports = require('./configureStore.prod');
}

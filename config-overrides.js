const { override, addWebpackAlias, addDecoratorsLegacy, addLessLoader } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir);
module.exports = override(
  addWebpackAlias({
    ['@']: resolve('src')
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true
  }),
  addDecoratorsLegacy()
)

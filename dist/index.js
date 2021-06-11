
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./attention.cjs.production.min.js')
} else {
  module.exports = require('./attention.cjs.development.js')
}

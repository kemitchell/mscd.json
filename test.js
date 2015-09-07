var tv4 = require('tv4')
var result = tv4.validateMultiple(require('./index'), require('./schema'))

if (result.errors.length > 0) {
  process.stderr.write(JSON.stringify(result, null, 2) + '\n')
  process.exit(1) }

'use strict'

module.exports = function (max) {
  if (max === undefined) max = Infinity
  else if (max < 0) throw new Error('Max cannot be negative')

  return function (input) {
    var type = typeof input
    if (type !== 'string' && type !== 'number' && !Array.isArray(input)) return NaN
    return parseInt(new Buffer(input).toString('hex').substr(0, 255), 16) % max
  }
}

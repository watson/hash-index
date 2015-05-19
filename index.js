'use strict'

module.exports = function (input, max) {
  if (max === undefined) max = Infinity
  else if (max < 0) throw new Error('Max cannot be negative')
  var type = typeof input
  if (type !== 'string' && type !== 'number' && !Array.isArray(input)) return NaN
  return parseInt(new Buffer(input).toString('hex').substr(0, 255), 16) % max
}

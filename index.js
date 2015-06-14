'use strict'

var isInt = function (n) {
  return Number(n) === n && n % 1 === 0
}

module.exports = function (input, max) {
  if (max === undefined) max = Infinity
  var type = typeof input
  if ((!isInt(max) && max !== Infinity) ||
      max <= 0 ||
      (type !== 'string' && type !== 'number' && !Array.isArray(input))) return NaN
  return parseInt(new Buffer(input).toString('hex').substr(0, 255), 16) % max
}

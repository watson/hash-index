'use strict'

var crypto = require('crypto')

var isInt = function (n) {
  return Number(n) === n && n % 1 === 0
}

var isValid = function (input) {
  var type = typeof input
  if (type === 'number' && isNaN(input)) return false
  return type === 'number' || type === 'string' || Buffer.isBuffer(input)
}

var toNumber = function (buf) {
  return buf.readUInt16BE(0) * 0xffffffff + buf.readUInt32BE(2)
}

module.exports = function (input, max) {
  if (max === undefined) max = Infinity
  if ((!isInt(max) && max !== Infinity) || max <= 0) throw new Error('max must be positive integer')
  if (!isValid(input)) throw new Error('Input must be a string, buffer or a number')

  if (typeof input === 'number') input = input.toString()
  return toNumber(crypto.createHash('sha1').update(input).digest()) % max
}

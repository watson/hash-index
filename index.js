'use strict'

module.exports = function (max) {
  return function (seed) {
    return parseInt(new Buffer(seed).toString('hex').substr(0, 255), 16) % max
  }
}

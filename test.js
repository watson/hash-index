'use strict'

var test = require('tape')
var hashIndex = require('./')

test('return integer', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isFinite(hasher('input')))
  t.end()
})

test('return between 0 and max', function (t) {
  var max = 10
  var hasher = hashIndex(max)
  var input = 'input'
  for (var n = 0; n < 1000; n++) {
    input += n
    var result = hasher(input)
    t.ok(result >= 0)
    t.ok(result < max)
  }
  t.end()
})

test('same input, same output', function (t) {
  var hasher = hashIndex(10)
  t.equal(hasher('foo'), hasher('foo'))
  t.end()
})

test('different input, different output', function (t) {
  var hasher = hashIndex(10)
  t.notEqual(hasher('foo'), hasher('bar'))
  t.end()
})

test('same input, same output, but different hashers', function (t) {
  var hasher = hashIndex(10)
  var result = hasher('foo')
  hasher = hashIndex(10)
  t.equal(hasher('foo'), result)
  t.end()
})

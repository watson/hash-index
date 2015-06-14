'use strict'

var test = require('tape')
var hashIndex = require('./')

test('no input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isNaN(hasher()))
  t.end()
})

test('empty string input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isNaN(hasher('')))
  t.end()
})

test('null input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isNaN(hasher(null)))
  t.end()
})

test('NaN input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isNaN(hasher(NaN)))
  t.end()
})

test('object input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isNaN(hasher({})))
  t.end()
})

test('empty array input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isNaN(hasher([])))
  t.end()
})

test('full array input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isFinite(hasher([1, 'foo'])))
  t.end()
})

test('number input', function (t) {
  var hasher = hashIndex(10)
  t.ok(Number.isFinite(hasher(1)))
  t.end()
})

test('string input', function (t) {
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

test('max not given', function (t) {
  var hasher = hashIndex()
  t.ok(Number.isFinite(hasher('input')))
  t.end()
})

test('max negative', function (t) {
  t.throws(function () {
    hashIndex(-1)
  })
  t.end()
})

test('expected output', function (t) {
  var hasher = hashIndex(100)
  t.equal(hasher('foo'), 99)
  t.equal(hasher('bar'), 74)
  t.end()
})

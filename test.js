'use strict'

var test = require('tape')
var hasher = require('./')

test('no input', function (t) {
  t.ok(Number.isNaN(hasher()))
  t.end()
})

test('empty string input', function (t) {
  t.ok(Number.isNaN(hasher('')))
  t.end()
})

test('null input', function (t) {
  t.ok(Number.isNaN(hasher(null)))
  t.end()
})

test('NaN input', function (t) {
  t.ok(Number.isNaN(hasher(NaN)))
  t.end()
})

test('object input', function (t) {
  t.ok(Number.isNaN(hasher({})))
  t.end()
})

test('empty array input', function (t) {
  t.ok(Number.isNaN(hasher([])))
  t.end()
})

test('full array input', function (t) {
  t.ok(Number.isFinite(hasher([1, 'foo'])))
  t.end()
})

test('number input', function (t) {
  t.ok(Number.isFinite(hasher(1)))
  t.end()
})

test('string input', function (t) {
  t.ok(Number.isFinite(hasher('input')))
  t.end()
})

test('return between 0 and max', function (t) {
  var max = 10
  var input = 'input'
  for (var n = 0; n < 1000; n++) {
    input += n
    var result = hasher(input, max)
    t.ok(result >= 0)
    t.ok(result < max)
  }
  t.end()
})

test('max zero', function (t) {
  t.ok(Number.isNaN(hasher('foo', 0)))
  t.end()
})

test('max negative', function (t) {
  t.ok(Number.isNaN(hasher('foo', -1)))
  t.end()
})

test('with max', function (t) {
  t.test('same input, same output', function (t) {
    t.equal(hasher('foo', 10), hasher('foo', 10))
    t.end()
  })

  t.test('different input, different output', function (t) {
    t.notEqual(hasher('foo', 10), hasher('bar', 10))
    t.end()
  })
})

test('without max', function (t) {
  t.test('same input, same output', function (t) {
    t.equal(hasher('foo'), hasher('foo'))
    t.end()
  })

  t.test('different input, different output', function (t) {
    t.notEqual(hasher('foo'), hasher('bar'))
    t.end()
  })
})

test('with different max', function (t) {
  t.test('same input, different output', function (t) {
    t.notEqual(hasher('foobar', 10), hasher('foobar', 11))
    t.end()
  })
})

test('expected output', function (t) {
  t.equal(hasher('foo', 100), 99)
  t.equal(hasher('bar', 100), 74)
  t.end()
})

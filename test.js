'use strict'

var test = require('tape')
var index = require('./')

test('return integer', function (t) {
  var generator = index(10)
  t.ok(Number.isFinite(generator('seed')))
  t.end()
})

test('return between 0 and max', function (t) {
  var max = 10
  var generator = index(max)
  var seed = 'seed'
  for (var n = 0; n < 1000; n++) {
    seed += n
    var result = generator(seed)
    t.ok(result >= 0)
    t.ok(result < max)
  }
  t.end()
})

test('same input, same output', function (t) {
  var generator = index(10)
  t.equal(generator('foo'), generator('foo'))
  t.end()
})

test('different input, different output', function (t) {
  var generator = index(10)
  t.notEqual(generator('foo'), generator('bar'))
  t.end()
})

test('same input, same output, but different generators', function (t) {
  var generator = index(10)
  var result = generator('foo')
  generator = index(10)
  t.equal(generator('foo'), result)
  t.end()
})

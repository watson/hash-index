# hash-index

A function which will always return the same output given the same
input. The output is an integer in the range 0..n. By default `n` is
infinity-1, but another max value can be provided as an optional 2nd
argument.

The output is not guaranteed to be unique - only to be predictable based
on the input.

[![Build status](https://travis-ci.org/watson/hash-index.svg?branch=master)](https://travis-ci.org/watson/hash-index)

[![js-standard-style](https://raw.githubusercontent.com/feross/standard/master/badge.png)](https://github.com/feross/standard)

## Installation

```
npm install hash-index
```

## Usage

```js
var hasher = require('hash-index')

// same input => same output
hasher('bob')   // => 79268366047899
hasher('alice') // => 90345298322240
hasher('bob')   // => 79268366047899
hasher('alice') // => 90345298322240
```

Using the optional 2nd argument, you can supply an upper limit for the
returned hash value:

```js
hasher('bob', 100)   // => 99
hasher('alice', 100) // => 40
hasher('bob', 100)   // => 99
hasher('alice', 100) // => 40
```

## Input validation

If no `max` value is given, infinity-1 is used as the max value.

If `max` is less than `1` then `NaN` will be returned.

The input have to be either a non-empty string, a number or a non-empty
array. If not, `NaN` will be returned.

## License

MIT

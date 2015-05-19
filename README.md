# hash-index

A function which will always return the same output given the same
input. The output is an integer in the range 0..n where `n` is the max
value given upon initialization of the module.

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
// initialize with a max output of 100
var hasher = require('hash-index')(100)

hasher('bob')   // => 42
hasher('alice') // => 65
hasher('bob')   // => 42
hasher('alice') // => 65
```

## Non-standard Usage

If no `max` value is given, infinity is used as the max value.

If the input is not either a non-empty string, a non-empty array or a
number, `NaN` will be returned.

## License

MIT

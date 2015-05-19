# Name of module to be decided

A function which will always return the same output given the same
input. The output is an integer in the range 0..n where `n` is the max
value given upon initialization of the module.

The output is not guaranteed to be unique - only to be predictable based
on the input.

## Usage

```js
// initialize with a max output of 100
var hasher = require('str-to-int-hash')(100)

hasher('foo') // => 56
hasher('bar') // => 23
hasher('foo') // => 56
hasher('bar') // => 23
```

## License

MIT

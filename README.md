# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@luaduarte04/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const function head(array)`: returns the first item in the array.
* `const tail = function(array)`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `const middle = function(array`: It will take in an array and return the middle-most element(s) of the given array.
* `function assertEqual(actual, expected)`: It compare the two values it takes in and print out a message telling us if they match or not.
* `const assertArraysEqual = function(actual, expected)`: It will take in two arrays and console.log an appropriate message to the console.
* `const assertObjectsEqual = function(actual, expected)`: It will take in two objects and console.log an appropriate message to the console.
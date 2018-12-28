/**
 * Fibonacci module
 * 
 * @module lib/fibonacci
 * 
 * When calculating the fibonacci sequence after the 78th fibonacci number the
 * fact javascript treats everything as a floating point means that you lose
 * precision and it'll start rounding and losing digits.
 * This is why the returned objects are of type Bignum.
 */

'use strict';

const assert = require('assert');
const bignum = require('bignum');

var cache = [bignum(0), bignum(1)];

/**
 * Calculate the value of the nth fibonacci number
 * 
 * @param {!number} number - the nth fibonacci number
 * @returns {bignum} - the calculated value, see notes as to why
 */
function fibonacci(number) {
    // ensure we are working with a number
    if (typeof(number) !== 'number') { throw new TypeError("Not a number"); }
    // can't do fibonacci calculations on non-integer numbers
    if (Math.floor(number) !== number) { throw new TypeError("Non-integer value"); }
    if (number < 0) {
        return fibonacci(Math.abs(number)).neg();
    }
    if (number < cache.length) {
        return cache[number];
    }
    else {
        var val = fibonacci(number - 1).add(fibonacci(number - 2));
        cache.push(val);
        return val;
    }
}

module.exports = {
    fibonacci
};


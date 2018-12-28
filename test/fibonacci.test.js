const expect = require('chai').expect;
const fib = require('../lib/fibonacci.js');

describe("Fibonacci calculator", () => {
    it('Calculate fibonnaci of 0', () => {
        expect(fib.fibonacci(0).eq(0)).to.be.true;
        expect(fib.fibonacci(-0.0).eq(0)).to.be.true;
    });

    it('Calculate fibonacci of 1 and 2', () => {
        expect(fib.fibonacci(1).eq(1)).to.be.true;
        expect(fib.fibonacci(2).eq(1)).to.be.true;
    });

    it('calculate fibonacci of -1 and -2', () => {
        expect(fib.fibonacci(-1).eq(-1)).to.be.true;
        expect(fib.fibonacci(-2).eq(-1)).to.be.true;
    });

    it('calculate fibonacci of 3 and -3', () => {
        expect(fib.fibonacci(3).eq(2)).to.be.true;
        expect(fib.fibonacci(-3).eq(-2)).to.be.true;
    });

    it('calculate fibonacci of 4 and -4', () => {
        expect(fib.fibonacci(4).eq(3)).to.be.true;
        expect(fib.fibonacci(-4).eq(-3)).to.be.true;
    });

    it('calculate the first 9 fibonacci numbers', () => {
        var expected_values = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        for (i = 0; i < expected_values.length; i++) {
            expect(fib.fibonacci(i).eq(expected_values[i])).to.be.true;
        }
    });

    it('calculate a big fibonacci number, 78th', () => {
        expect(fib.fibonacci(78).eq(8944394323791464)).to.be.true;
    });
});
describe('Fibonacci input validation', () => {
    // invalid input assertions
    it('test exceptions for invalid input types', () => {
        var invalids = [null, undefined, "String", true, false, { 'error': 1 }, ['a', 'b']];
        /*
        invalids.forEach((item, index) => {
            console.log('item: ' + item + '; isNaN: ' + isNaN(item) + '; proto: ' + Object.prototype.toString.call(item) + '; type: ' + typeof(item));
        });
        item: null; isNaN: false; proto: [object Null]; type: object
        item: undefined; isNaN: true; proto: [object Undefined]; type: undefined
        item: String; isNaN: true; proto: [object String]; type: string
        item: true; isNaN: false; proto: [object Boolean]; type: boolean
        item: false; isNaN: false; proto: [object Boolean]; type: boolean
        item: [object Object]; isNaN: true; proto: [object Object]; type: object
        item: a,b; isNaN: true; proto: [object Array]; type: object
         */
        invalids.forEach((item, index) => {
            expect(
                () => {
                    fib.fibonacci(item);
                }).to.throw(
                    TypeError, "Not a number");
        });
    });

    it('test for invalid floating point numbers', () => {
        var invalids = [-1.1, -1.9, 0.1, 5.1, 5.9];
        invalids.forEach((num, index) => {
            expect(
                () => {
                    fib.fibonacci(num);
                }).to.throw(TypeError, "Non-integer value");

        });
    });
});

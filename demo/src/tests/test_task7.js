import fibonacciNumber from '../../src/task7.js';

const assert = chai.assert;

export default function test_task7() {
    describe('Task 7. Fibonacci number', () => {
        describe('positive tests', () => {
            it('min: 5, max: 110, length: 3', () => {
                assert.equal(fibonacciNumber({min: 5, max: 110, length: 3}), '5,8,13,21,34,55,89');
            });
            it('length: 50', () => {
                assert.equal(fibonacciNumber({length: 50}), '1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049,12586269025');
            });
            it('min: 9, length: 10', () => {
                assert.equal(fibonacciNumber({min: 9, length: 10}), '1,1,2,3,5,8,13,21,34,55');
            });
        });
        describe('exceptions', () => {
            it('min: 5', () => {
                assert.deepEqual(fibonacciNumber({min: 5}), {
                    status: 'failed',
                    reason: 'Max value must be more than 1 and be a number'
                });
            });
            it('max: 59', () => {
                assert.deepEqual(fibonacciNumber({max: 59}), {
                    status: 'failed',
                    reason: 'Min value must be more than 1 and be a number'
                });
            });
            it('min: 5, max: 1', () => {
                assert.deepEqual(fibonacciNumber({min: 5, max: 3}), {
                    status: 'failed',
                    reason: 'Max value must be more or equal to min value'
                });
            });
        });
        describe('function with wrong format', () => {
            it('length: -4', () => {
                assert.deepEqual(fibonacciNumber({length: -4}), {
                    status: 'failed',
                    reason: 'Length must be an integer number'
                });
            });
        });
    })
}
import isPalindrom from '../../src/task4.js';

const assert = chai.assert;

export default function test_task4() {
    describe('Task 4. Palindrome', () => {
        describe('positive tests', () => {
            it('whole number is palidrome 404', () => {
                assert.equal(isPalindrom(404), 404);
            });
            it('whole number is palidrome 2168667447668612', () => {
                assert.equal(isPalindrom(2168667447668612), 2168667447668612);
            });
            it('part of number is palidrome 98844', () => {
                assert.equal(isPalindrom(98844), 88);
            });
            it('negative number', () => {
                assert.equal(isPalindrom(-12332), 2332);
            });
            it('no palindrome', () => {
                assert.equal(isPalindrom(5931), 0);
            });
        });
        describe('function with wrong format', () => {
            it('too long number', () => {
                assert.deepEqual(isPalindrom(404585858595686800000000945), {
                    status: 'failed',
                    reason: 'Length of number must be in range 2 - 20'
                });
            });
            it('too short number', () => {
                assert.deepEqual(isPalindrom(4), {
                    status: 'failed',
                    reason: 'Length of number must be in range 2 - 20'
                });
            });
            it('string as input value', () => {
                assert.deepEqual(isPalindrom('49755'), {
                    status: 'failed',
                    reason: 'Input value isn`t a number'
                });
            });
            it('number isn`t an integer', () => {
                assert.deepEqual(isPalindrom(49755.4), {
                    status: 'failed',
                    reason: 'Number must be an integer'
                });
            });
        });
    })
}
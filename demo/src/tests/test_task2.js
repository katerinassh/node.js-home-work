import isImpossiblePutInto from '../../src/task2.js';

const assert = chai.assert;

export default function test_task2() {
    describe('Task 2. Envelops', () => {
        describe('positive tests', () => {
            it('{a: 4, b: 10}, {c: 8, d: 2}', () => {
                assert.equal(isImpossiblePutInto({a: 4, b: 10}, {c: 8, d: 2}), 2);
            });
            it('{a: 5, b: 5}, {c: 5, d: 5}', () => {
                assert.equal(isImpossiblePutInto({a: 5, b: 5}, {c: 5, d: 5}), 0);
            });
        });
        describe('function without parameters', () => {
            it('{a: 4, b: 10}', () => {
                assert.deepEqual(isImpossiblePutInto({a: 4, b: 10}), {
                    status: 'failed',
                    reason: 'You did not enter parameters of all envelops'
                });
            });
            it('{b: 10}, {c: 6, d: 1}', () => {
                assert.deepEqual(isImpossiblePutInto({b: 10}, {c: 6, d: 1}), {
                    status: 'failed',
                    reason: 'You did not enter all the required parameters'
                });
            });
        });
        describe('function with wrong input format', () => {
            it('{a: 5, b: 5}, {c: "5", d: "5"}', () => {
                assert.deepEqual(isImpossiblePutInto({a: 4, b: 10}, {c: "5", d: "5"}), {
                    status: 'failed',
                    reason: 'Each side must be a number'
                });
            });
            it('{a: -1, b: 100}, {c: 6, d: 1}', () => {
                assert.deepEqual(isImpossiblePutInto({a: -1, b: 100}, {c: 6, d: 1}), {
                    status: 'failed',
                    reason: 'Minimum length of each side 1'
                });
            });
            it('{a: 1, b: 100}, {c: 666666, d: 1}', () => {
                assert.deepEqual(isImpossiblePutInto({a: 1, b: 100}, {c: 666666, d: 1}), {
                    status: 'failed',
                    reason: 'Maximum length of each side 100000'
                });
            });
        });
    })
}
import sequence from '../../src/task6.js';

const assert = chai.assert;

export default function test_task6() {
    describe('Task 6. Sequence', () => {
        describe('positive tests', () => {
            it('sequence with length 30, min 8', () => {
                assert.equal(sequence(30, 8), '3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32');
            });
            it('sequence with length 3, min 1', () => {
                assert.equal(sequence(3, 1), '1, 2, 3');
            });
            it('min is not an integer', () => {
                assert.equal(sequence(5, 17.2), '5, 6, 7, 8, 9');
            });
        });
        describe('exceptions with length', () => {
            it('length is not an integer', () => {
                assert.deepEqual(sequence(3.2, 1), {
                    status: 'failed',
                    reason: 'The length of the row must be specified as an integer natural number in the range up to 1,000,000'
                });
            });
            it('length is more than 1 000 000', () => {
                assert.deepEqual(sequence(2000000, 1), {
                    status: 'failed',
                    reason: 'The length of the row must be specified as an integer natural number in the range up to 1,000,000'
                });
            });
        });
        describe('exceptions with m', () => {
            it('type of m = string', () => {
                assert.deepEqual(sequence(3, '1'), {
                    status: 'failed',
                    reason: 'The value of the minimum square must be specified by a number in the range from 1 to 1,000,000'
                });
            });
            it('length is less than 1', () => {
                assert.deepEqual(sequence(3, -1), {
                    status: 'failed',
                    reason: 'The value of the minimum square must be specified by a number in the range from 1 to 1,000,000'
                });
            });
        });
    })
}
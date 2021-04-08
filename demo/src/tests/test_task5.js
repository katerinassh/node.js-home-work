import luckyTickets from '../../src/task5.js';

const assert = chai.assert;

export default function test_task5() {
    describe('Task 5. Lucky tickets', () => {
        describe('positive tests', () => {
            it('won complicated method 99 - 110', () => {
                assert.equal(luckyTickets({min: 99, max: 110}), '{won: Сложный метод, simpleCount: 0, complicatedCount: 2}');
            });
            it('six-digit numbers', () => {
                assert.equal(luckyTickets({min: 598731, max: 598862}), '{won: Сложный метод, simpleCount: 5, complicatedCount: 9}');
            });
        });
        describe('exceptions', () => {
            it('last is less than first', () => {
                assert.deepEqual(luckyTickets({min: 598731, max: 590013}), {
                    status: 'failed',
                    reason: 'Last ticket number is less then first'
                });
            });
        });
        describe('function with wrong formats', () => {
            it('function without parameters', () => {
                assert.deepEqual(luckyTickets({}), {
                    status: 'failed',
                    reason: 'Input all required parameters to get result'
                });
            });
            it('string as input value', () => {
                assert.deepEqual(luckyTickets({min: '36', max: 47688}), {
                    status: 'failed',
                    reason: 'Input parameters must be integers in the range from 0 to 999999'
                });
            });
            it('not integer input value', () => {
                assert.deepEqual(luckyTickets({min: 36.66, max: 47688}), {
                    status: 'failed',
                    reason: 'Input parameters must be integers in the range from 0 to 999999'
                });
            });
        });
    })
}
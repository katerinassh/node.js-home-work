import chessBoard from '/src/task1.js';

const assert = chai.assert;

export default function test_task1() {
    describe('Task1. Chess board', () => {
        describe('chessboard with symbol / positive tests', () => {
            it('length: 3, width: 4, symbol: *', () => {
                assert.equal(chessBoard(3, 4, '*'), '* * * * \n * * * *\n* * * * \n');
            });
            it('length: 5, width: 5, symbol: Ukraine', () => {
                assert.equal(chessBoard(5, 5, 'Ukraine'), 'U U U U U \n U U U U U\nU U U U U \n U U U U U\nU U U U U \n');
            });
        });
    
        describe ('function without parameters', () => {
            it('length: undefined, width: 4, symbol: *', () => {
                assert.deepEqual(chessBoard(4, '*'), {
                    status: 'failed',
                    reason: 'You did not enter all the required parameters'
                });
            });
            it('length: undefined, width: undefined, symbol: undefined', () => {
                assert.deepEqual(chessBoard(), {
                    status: 'failed',
                    reason: 'You did not enter all the required parameters'
                });
            })
        });
    
        describe ('length or/and width is not an integer', () => {
            it('length: 2.25, width: 4, symbol: +', () => {
                assert.deepEqual(chessBoard(2.25, 4, '+'), {
                    status: 'failed',
                    reason: 'At least one of your parametrs is not an integer. You must input only int numbers!'
                });
            });
            it('length: 5, width: 4.78, symbol: +', () => {
                assert.deepEqual(chessBoard(5, 4.78, '+'), {
                    status: 'failed',
                    reason: 'At least one of your parametrs is not an integer. You must input only int numbers!'
                });
            });
        });
    
        describe ('length, width is not in range 2 - 256', () => {
            it('length: 0, width: 258, symbol: +', () => {
                assert.deepEqual(chessBoard(1, 258, '+'), {
                    status: 'failed',
                    reason: 'Height and width must be between 2 and 256'
                });
            });
            it('length: -5, width: 4, symbol: +', () => {
                assert.deepEqual(chessBoard(-5, 4, '+'), {
                    status: 'failed',
                    reason: 'Height and width must be between 2 and 256'
                });
            });
        });
    
        describe ('wrong input value format', () => {
            it('length: 0, width: 258, symbol: +', () => {
                assert.deepEqual(chessBoard('16', 250, '+'), {
                    status: 'failed',
                    reason: 'At least one of your parametrs is not an integer. You must input only int numbers!'
                });
            });
        });
    });
};




import sortTriangles from '../../src/task3.js';

const assert = chai.assert;

export default function test_task3() {
    describe('Task 3. Sort triangles', () => {
        describe('positive tests', () => {
            it('2 triangles', () => {
                assert.equal(sortTriangles([{vertices: "ABC", a: 10, b: 20, c: 22.36}, {vertices: "ABF", a: 20, b: 20, f: 27.36}]), 'ABF,ABC');
            });
            it('4 triangles with 2 which has same size', () => {
                assert.equal(sortTriangles([{vertices: "ABC", a: 10, b: 20, c: 22.36}, {vertices: "ABF", a: 20, b: 20, f: 27.36}, {vertices: "KLO", k: 10, l: 8, o: 7.5}, {vertices: "ITR", i: 7.5, t: 8, r: 10}]), 'ABF,ABC,KLO,ITR');
            });
        });
        describe('exceptions', () => {
            it('not correct names of triangle', () => {
                assert.deepEqual(sortTriangles([{vertices: "ABC", a: 10, b: 20, c: 22.36}, {vertices: "AKF", a: 10, b: 8, f: 13}]), {
                    status: 'failed',
                    reason: 'Sides don`t match vertices or you didn`t input them in correct format'
                });
            });
            it('triangle doesn`t exist', () => {
                assert.deepEqual(sortTriangles([{vertices: "ABC", a: 1, b: 20, c: 25.5}, {vertices: "ABF", a: 0, b: 20, f: 27.36}, {vertices: "KLO", k: 10, l: 8, o: 7.5}]), {
                    status: 'failed',
                    reason: 'At least one of triangles can`t exist'
                });
            });
            it('zero side', () => {
                assert.deepEqual(sortTriangles([{vertices: "ABC", a: 14, b: 20, c: 25.5}, {vertices: "ABF", a: 0, b: 20, f: 27.36}, {vertices: "KLO", k: 10, l: 8, o: 7.5}]), {
                    status: 'failed',
                    reason: 'At least one of triangles can`t exist'
                });
            });
        });
        describe('function with wrong format', () => {
            it('not correct names of triangle', () => {
                assert.deepEqual(sortTriangles([{vertices: "ABC", a: '10', b: 20, c: 22.36}, {vertices: "AKF", a: 10, b: 8, f: 13}]), {
                    status: 'failed',
                    reason: 'Sides don`t match vertices or you didn`t input them in correct format'
                });
            });
            
        });
    })
}
function failed(reason) {
    return {status: 'failed', reason: reason};
}

function validationTask1(length, width, symbol) {
    if (!length || !width || !symbol) return failed('You did not enter all the required parameters');
    if (!Number.isInteger(length) || !Number.isInteger(width)) return failed('At least one of your parametrs is not an integer. You must input only int numbers!');
    if (length < 2 || length > 256 || width < 2 || width > 256) return failed('Height and width must be between 2 and 256');
}

function validationTask2(env1, env2) {
    if (!env1 || !env2) return failed('You did not enter parameters of all envelops');

    const {a, b} = env1;
    const {c, d} = env2;
    if (!a || !b || !c || !d) return failed('You did not enter all the required parameters');
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number') return failed('Each side must be a number');
    if (a < 1 || b < 1 || c < 1 || d < 1) return failed('Minimum length of each side 1');
    if (a > 100000 || b > 100000 || c > 100000 || d > 100000) return failed('Maximum length of each side 100000');
}

function validationTask3(a, b, c, square) {
    if (a + b <= c || a + c <= b || b + c <= a || a == 0 || b == 0 || c == 0) return failed('At least one of triangles can`t exist');
    if (!a || !b || !c || square.isNaN) return failed('Sides don`t match vertices or you didn`t input them in correct format');
}

function validationTask4(number) {
    if ((number + '').length < 2 || (number + '').length > 20) return failed('Length of number must be in range 2 - 20');
    if (typeof number != 'number') return failed('Input value isn`t a number');
    if (!Number.isInteger(number) || number == Infinity || number == -Infinity || isNaN(number)) return failed('Number must be an integer');
}

function validationTask5(min, max) {
    if (!min || !max) return failed('Input all required parameters to get result');
    if (typeof max != 'number' || typeof min != 'number' || min < 0 || max > 999999 || !Number.isInteger(min) || !Number.isInteger(max)) return failed('Input parameters must be integers in the range from 0 to 999999');
    if (max < min) return failed('Last ticket number is less then first');
}

function validationTask6(n ,m) {
    if (typeof n != 'number' || n < 1 || n > 1000000 || n == Infinity || n == -Infinity || isNaN(n) || !Number.isInteger(n)) return failed('The length of the row must be specified as an integer natural number in the range up to 1,000,000');
    if (typeof m != 'number' || m < 1 || m > 1000000 || m == Infinity || m == -Infinity || isNaN(m)) return failed('The value of the minimum square must be specified by a number in the range from 1 to 1,000,000');
}

function validationTask7(min, max, length) {
    if ((typeof min != 'number' || min < 1 || min == Infinity || min == -Infinity || isNaN(min)) && !length) return failed('Min value must be more than 1 and be a number');
    if ((typeof max != 'number' || max < 1 || max == Infinity || max == -Infinity || isNaN(max)) && !length) return failed('Max value must be more than 1 and be a number');
    if (max < min && !length) return failed('Max value must be more or equal to min value');
    if (!min && !max && (typeof length != 'number' || !Number.isInteger(length) || length < 1)) return failed('Length must be an integer number');
}

export { validationTask1, validationTask2, validationTask3, validationTask4, validationTask5, validationTask6, validationTask7 };
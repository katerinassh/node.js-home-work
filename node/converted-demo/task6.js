function failed(reason) {
    return {status: 'failed', reason: reason};
}

function validationTask6(n ,m) {
    if (typeof n != 'number' || n < 1 || n > 1000000 || n == Infinity || n == -Infinity || isNaN(n) || !Number.isInteger(n)) return failed('The length of the row must be specified as an integer natural number in the range up to 1,000,000');
    if (typeof m != 'number' || m < 1 || m > 1000000 || m == Infinity || m == -Infinity || isNaN(m)) return failed('The value of the minimum square must be specified by a number in the range from 1 to 1,000,000');
}

exports.sequence = function(n, m) {
    const isNotValid = validationTask6(n, m);
    const result = isNotValid ? isNotValid : '';
    if (result) return {status: result.status, reason: result.reason};

    let min = Math.ceil(Math.sqrt(m));
    let sequence = '';
    while (n > 0) {
        sequence = `${sequence}, ${min}`;
        min++; 
        n--;
    }

    return sequence.slice(2);
}
function failed(reason) {
    return {status: 'failed', reason: reason};
}

function validationTask4(number) {
    if ((number + '').length < 2 || (number + '').length > 20) return failed('Length of number must be in range 2 - 20');
    if (typeof number != 'number') return failed('Input value isn`t a number');
    if (!Number.isInteger(number) || number == Infinity || number == -Infinity || isNaN(number)) return failed('Number must be an integer');
}

exports.isPalindrom = function(number) {
    const isNotValid = validationTask4(number);
    let result = isNotValid ? isNotValid : '';
    if (result) return {status: result.status, reason: result.reason};
    
    number = number + '';

    let reversed = number.split('').reverse().join('');
    let pos, len, palindrom = [0, 0];

    for(pos = 0; pos < number.length; pos++) {
        for(len = number.length - pos; len > palindrom[1]; len--) {
            if (reversed.indexOf(number.substr(pos, len)) != -1) palindrom = [pos, len];
        }
    }

    return result = number.substr(...palindrom) >= 10 ? number.substr(...palindrom) : 0;
    
}
function failed(reason) {
    return {status: 'failed', reason: reason};
}

function validationTask7(min, max, length) {
    if ((typeof min != 'number' || min < 1 || min == Infinity || min == -Infinity || isNaN(min)) && !length) return failed('Min value must be more than 1 and be a number');
    if ((typeof max != 'number' || max < 1 || max == Infinity || max == -Infinity || isNaN(max)) && !length) return failed('Max value must be more than 1 and be a number');
    if (max < min && !length) return failed('Max value must be more or equal to min value');
    if (!min && !max && (typeof length != 'number' || !Number.isInteger(length) || length < 1)) return failed('Length must be an integer number');
}

const next = array => {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array
};

exports.fibonacciNumber = function({min, max, length}) {
    const isNotValid = validationTask7(min, max, length);
    const result = isNotValid ? isNotValid : '';
    if (result) return {status: result.status, reason: result.reason};

    let array = [1, 1];
    
    if (min && max) {
        while (array[array.length - 1] < max) {
            array = next(array);
        }
        return array.filter(elem => elem >= min && elem <= max);
    } 

    while (array.length < length) {
        if (length == 1) return 1;
        
        array = next(array);
    }
    return array;
}
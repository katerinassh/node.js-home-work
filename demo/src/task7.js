import {validationTask7 as validation} from './validation.js';

const next = array => {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array
};

export default function fibonacciNumber({min, max, length}) {
    const isNotValid = validation(min, max, length);
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
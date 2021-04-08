import {validationTask4 as validation} from './validation.js';

export default function isPalindrom(number) {
    const isNotValid = validation(number);
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
import {validationTask6 as validation} from './validation.js';

export default function sequence(n, m) {
    const isNotValid = validation(n, m);
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
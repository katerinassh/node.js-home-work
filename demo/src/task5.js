import {validationTask5 as validation} from './validation.js';

export default function luckyTickets({min, max}) {
    const isNotValid = validation(min, max);
    const result = isNotValid ? isNotValid : '';
    if (result) return {status: result.status, reason: result.reason};

    let i = min;
    let simpleCount = 0;
    let complicatedCount = 0;
    while (i <= max) {
        const digits = (i + '').split('').map(digit => +digit);
        console.log(digits);
        let sum = 0;
        for(let index = 0; index < digits.length; index++) {
            if (index % 2 == 0) sum += digits[index];
            else sum -= digits[index];
        }
        console.log(sum);

        if (sum == 0) complicatedCount++;
        if (digits.length == 6 && digits.slice(0, 3).reduce((acc, d) => acc += d, 0) == digits.slice(3).reduce((acc, d) => acc += d, 0)) simpleCount++;

        i++;
    }

    let won = simpleCount > complicatedCount ? 'Простой метод' : 'Сложный метод';
    won = (simpleCount == complicatedCount) ? 'Оба метода дали равное количество счастливых билетов' : won;

    return `{won: ${won}, simpleCount: ${simpleCount}, complicatedCount: ${complicatedCount}}`
}

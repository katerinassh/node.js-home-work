function failed(reason) {
    return {status: 'failed', reason: reason};
}

function validationTask5(min, max) {
    if (!min || !max) return failed('Input all required parameters to get result');
    if (typeof max != 'number' || typeof min != 'number' || min < 0 || max > 999999 || !Number.isInteger(min) || !Number.isInteger(max)) return failed('Input parameters must be integers in the range from 0 to 999999');
    if (max < min) return failed('Last ticket number is less then first');
}

exports.luckyTickets = function({min, max}) {
    const isNotValid = validationTask5(min, max);
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

        if (sum == 0) complicatedCount++;
        if (digits.length == 6 && digits.slice(0, 3).reduce((acc, d) => acc += d, 0) == digits.slice(3).reduce((acc, d) => acc += d, 0)) simpleCount++;

        i++;
    }

    let won = simpleCount > complicatedCount ? 'Простой метод' : 'Сложный метод';
    won = (simpleCount == complicatedCount) ? 'Оба метода дали равное количество счастливых билетов' : won;

    return `{won: ${won}, simpleCount: ${simpleCount}, complicatedCount: ${complicatedCount}}`
}

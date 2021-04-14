function failed(reason) {
    return {status: 'failed', reason: reason};
}

function validationTask1(length, width, symbol) {
    if (!length || !width || !symbol) return failed('You did not enter all the required parameters');
    if (!Number.isInteger(length) || !Number.isInteger(width)) return failed('At least one of your parametrs is not an integer. You must input only int numbers!');
    if (length < 2 || length > 256 || width < 2 || width > 256) return failed('Height and width must be between 2 and 256');
}

exports.chessBoard = function (length, width, symbol) {
    const isNotValid = validationTask1(length, width, symbol);
    let result = isNotValid ? isNotValid : '';
    if (result) return {status: result.status, reason: result.reason};

    symbol = symbol.length > 1 ? symbol[0] : symbol;
    
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < width; j++) {
            if (i % 2 == 1) result += ` ${symbol}`;
            else result += `${symbol} `;
        }
        result += '\n';
    }
    return result;
}


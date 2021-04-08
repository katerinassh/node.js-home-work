import {validationTask1 as validation} from './validation.js';

export default function chessBoard(length, width, symbol) {
    const isNotValid = validation(length, width, symbol);
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


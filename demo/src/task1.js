export default function chessBoard(length, width, symbol) {
    let result = '';
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < length; j++) {
            if (i % 2 == 1) result += ` ${symbol}`;
            else result += `${symbol} `;
        }
        result += '\n';
    }
    return result;
}


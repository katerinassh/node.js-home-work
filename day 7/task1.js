function ticTacToeChecker(board) {
    let sumDiag1, sumDiag2;
    const sumRows = [];
    for(let i = 0; i < 3; i++) {
        let sumRow = 0;
        for(let j = 0; j < 3; j++) {
            if (board[i][j] == 0) return -1;
            if (i == j) sumDiag1 += board[i][j];
            if (i + j == 2) sumDiag2 += board[i][j];
            sumRow += board[i][j];
        }
        sumRows.push(sumRow);
    }
    const sumCols = board[0].map((el, i) => board.reduce((acc, m) => acc + m[i], 0));
    
    const winX = (sumDiag1 == 3 || sumDiag2 == 3 || sumRows.includes(3) || sumCols.includes(3)) ? true : false;
    const winO = (sumDiag1 == 6 || sumDiag2 == 6 || sumRows.includes(6) || sumCols.includes(6)) ? true : false;
    
    if (!winX) return 2;
    if (!winO) return 1;
    return 0;
}

// console.log(ticTacToeChecker([
//     [1, 2, 1],
//     [1, 1, 2],
//     [2, 2, 2]]));
function ticTacToeChecker(board) {
    let mulDiag1, mulDiag2;
    const mulRows = [];
    for(let i = 0; i < 3; i++) {
        let mulRow = 0;
        for(let j = 0; j < 3; j++) {
            if (i == j) mulDiag1 *= board[i][j];
            if (i + j == 2) mulDiag2 *= board[i][j];
            mulRow *= board[i][j];
        }
        mulRows.push(mulRow);
    }
    const mulCols = board.map((el, i) => board.reduce((acc, m) => acc * m[i], 0));
    
    const winX = (mulDiag1 == 1 || mulDiag2 == 1 || mulRows.includes(1) || mulCols.includes(1)) ? true : false;
    const winO = (mulDiag1 == 8 || mulDiag2 == 8 || mulRows.includes(8) || mulCols.includes(8)) ? true : false;
    
    if (!winX && winO) return 2;
    if (!winO && !winX) return 1;
    if (!!winX && !winO) return -1;
    return 0;
}

// console.log(ticTacToeChecker([
//     [1, 2, 1],
//     [1, 1, 2],
//     [2, 2, 2]]));
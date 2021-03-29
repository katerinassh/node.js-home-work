function damagedOrSunk(board, attacks) {
    const result = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0
    };
    const shipsStart = [0, 0, 0];
    const shipsDamaged = [0, 0, 0];
    attacks = attacks.map(attack => [board.length - attack[1], --attack[0]]);

    board.forEach(row => row.forEach((field) => {
        if (field == 1) shipsStart[0]++;
        if (field == 2) shipsStart[1]++;
        if (field == 3) shipsStart[2]++;
    }));

    attacks.forEach(attack => {
        const x = attack[0]; const y = attack[1];
        if (board[x][y] != 0) board[x][y] *= -1;
    });

    board.forEach(row => row.forEach(field => {
        if (field == -1) shipsDamaged[0]++;
        if (field == -2) shipsDamaged[1]++;
        if (field == -3) shipsDamaged[2]++;
    }));

    shipsDamaged.forEach((ship, i) => {
        if (ship == shipsStart[i] && shipsStart[i] != 0) result.sunk++;
        if (ship < shipsStart[i] && ship != 0) result.damaged++;
        if (ship == 0 && shipsStart[i] != 0) result.notTouched++;
    });

    result.points = result.sunk + result.damaged * 0.5 - result.notTouched;
    return result;
}

board = [[0,0,0,2,2,0],
         [0,3,0,0,0,0],
         [0,3,0,1,0,0],
         [0,3,0,1,0,0]];

attacks = [[2, 1], [1, 3], [4, 2]];

console.log(damagedOrSunk(board, attacks));
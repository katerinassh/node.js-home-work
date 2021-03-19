function RemainedFootbalPlayers(cardsList) {
    let remainedPlayersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let remainedPlayersB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    cardsList.forEach((card) => {
        if (remainedPlayersA.length < 7 || remainedPlayersB.length < 7) return [remainedPlayersA.length, remainedPlayersB.length];

        if (card[0] === 'A') {
            editTeam(remainedPlayersA, card);
        } else {
            editTeam(remainedPlayersB, card);
        }
    });
    
    return [remainedPlayersA.length, remainedPlayersB.length];
}

function editTeam (teamList, currentCard) {
    const numberOfPlayer = +currentCard.replace(/\D/g, '');
    const colorCard = currentCard.replace(/\d/g, '')[1];
    const currentPlayerIndex = teamList.indexOf(numberOfPlayer) === -1 ? (numberOfPlayer - 1) : teamList.indexOf(numberOfPlayer);

    if (teamList.includes(numberOfPlayer) || (!Number.isInteger(teamList[currentPlayerIndex]) && teamList[currentPlayerIndex].number === numberOfPlayer)) {
        if (colorCard === 'R' ||  !Number.isInteger(teamList[currentPlayerIndex])) {
            teamList.splice(currentPlayerIndex, 1);
            
        } else if (Number.isInteger(teamList[currentPlayerIndex])) {
            teamList[currentPlayerIndex] = {number: teamList[currentPlayerIndex], card: 'Y'}
        }
    }
    return teamList;
}


console.log(RemainedFootbalPlayers(['A4R','A6R', 'A8R', 'A10R', 'A11R']));
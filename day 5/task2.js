function need(room) {
    if (room[1] == 0) return 'Game On';
    const freeChairs = room[0].map(everyRoom => everyRoom.map((el, i) => i == 0 ? el.length : el)).map(everyRoom => everyRoom[1] > everyRoom[0] ? (everyRoom[1] - everyRoom[0]): 0);
    
    let i = 0; let count = 0; const result = [];
    while (i <= freeChairs.length - 1 && count < room[1]) {
        result.push(freeChairs[i]);
        count += freeChairs[i];
        i++;
    }
    return (count == room[1]) ? result : 'Not enough!';
}

// const array = [[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4];
// console.log(need(array));
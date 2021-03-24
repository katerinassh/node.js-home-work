function closestPoints(coordinates) {
    const distances = [];
    
    for(let i = 0; i < coordinates.length; i++) {
        const dist = [];
        coordinates.forEach(point => {
            dist.push(Math.sqrt((coordinates[i][0] - point[0]) * (coordinates[i][0] - point[0]) + (coordinates[i][1] - point[1]) * (coordinates[i][1] - point[1])));
        });
        distances.push(dist);
    }

    let min = 1000000;
    let minIndex = [0, 0];

    distances.forEach((dist, row) => dist.forEach((value, index) => {
        if (value > 0 && value < min) {
            minIndex[1] = index;
            minIndex[0] = row;
            min = value;
        }
    }));
    
    return [array[minIndex[0]], array[minIndex[1]]];
}

// const array = [

//     [2,2], // A
  
//     [2,8], // B
  
//     [5,5], // C
  
//     [6,3], // D
  
//     [6,7], // E
  
//     [7,4], // F
  
//     [7,9]  // G
  
//   ];

//   console.log(closestPoints(array));


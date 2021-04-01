function loop(array) {
    const tempArr = [];
    for (let j = 0; j < array.length; j++) {
        tempArr.push(el, array[j]);
        permitions.push(tempArr);
    }
}

function permute(array, n) {
    const permitions = [];
    array.forEach((el, i) => {
        
    })
    
    // permitions.forEach(combination => permitions.forEach())
    console.log(permitions);


    return permitions
}

function plusMinus(array, sum) {
    if (array.length < 2 || array.length > 22 || sum < -10 || sum > 10) return 'Invalid input';
    
    sum = sum - array[0];
    array = array.shift();
    const indexes = [];

    let minusNumber = 0;
    while (minusNumber < array.length) {
        let tempSum = 0;

        if (minusNumber == 0) tempSum = array.reduce((acc, el, i) => {
            indexes.push(i);
            return acc += el
        }, 0);
        
        if (minusNumber == array.length - 1) tempSum = array.reduce((acc, el) => acc -= el, 0);
        

        if (tempSum == +sum) return true;
        minusNumber++;
    }
    permute(indexes);

    return false;

}
console.log(plusMinus([1, 8, 1, 20, 0], 9));

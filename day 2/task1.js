function GetNumberOfOneBits(integer) {
    if (integer < 0) return 'This number is negative! You shoud input a non-negative integer';

    const binaryCode = [];
    let numberOfOnes = 0;

    while(integer >= 1) {
        if(integer === 1) {
            binaryCode.push(1);
            break;
        }

        integer = Math.trunc(integer);
        binaryCode.push(integer % 2);
        integer /= 2;
    }
    
    binaryCode.forEach(number => number === 1 ? numberOfOnes++ : null);
    return numberOfOnes;
}

console.log(GetNumberOfOneBits(1234));
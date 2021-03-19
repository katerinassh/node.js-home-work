function sortDueToNumbers(str) {
    if (!str) return 'no';
    
    let currentPosition = 1;
    let sortedStr = '';
    const arrOfWords = str.split(' ');

    let index = 0;
    while (index < arrOfWords.length) {
        if (arrOfWords[index].includes(currentPosition)) {
            sortedStr += arrOfWords[index] + ' ';
            currentPosition++;
            index = 0;
        } 
        else index++;
    }
    
    return sortedStr.slice(0, sortedStr.length - 1);
}

console.log(sortDueToNumbers("4of Fo1r pe6ople g3ood th5e the2"));
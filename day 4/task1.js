function pop(array) {
    const arrayLen = array.length;
    const newArray = array.filter((elem, index) => index != arrayLen - 1);
    return array[arrayLen - 1];
}

function push(array, ...newElements) {
    array.forEach((elem, index, array) => {
        if (index == array.length - 1) {
            newElements.forEach((elem, i) =>  array[index + i + 1] = elem);
        }
    });;
    return array.length;
}

function shift(array) {
    const newArray = array.filter((elem, index) => index != 0);
    return array[0];
}

function unshift(array, ...newElements) {
    newElements.forEach((elem, index) => {
        if (index == newElements.length - 1) {
            array.forEach((elem, i) =>  newElements[index + i + 1] = elem);
        }
    });;
    return newElements.length;
}

function concat(...array) {
    return array.reduce((acc, next) => `${acc},${next}`).split(',');
}

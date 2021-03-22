function myConcat(string1, ...strings) {
    return string1 + strings.reduce((previous, current) => previous + current);
}

function myLastIdexOf(string, searchValue, fromIndex = -1) {
    let i = fromIndex === -1 ? string.length - 1 : fromIndex;

    while (i >= 0) {
        if(string[i] === searchValue) return i;
        i--;
    }
    
    return -1;
}

function myIncludes(string, searchValue, position = 0) {
    const regex = new RegExp(searchValue);
  
    return regex.test(string.slice(position, string.length));
}

function myRepeat(string, count) {
    let repeatedString = '';

    for (let i = 1; i <= Math.round(count); i++) {
        repeatedString += string; 
    }
    return repeatedString = count >= 0 ? repeatedString : -1;
}

function mySubStr(string, start, len = -1) {
    let subString = '';
    const end = len === -1 ? string.length : start + len; 
    start = start < 0 ? string.length + start : start;

    for (let i = start; i < end; i++) {
        subString += string[i];
    }

    return subString;
}

const convertToZero = (index) => (index < 0 || index == NaN) ? 0 : index;

function mySubString(string, indexA, indexB = string.length - 1) {
    let subString = '';
    
    indexA = convertToZero(indexA);
    indexB = convertToZero(indexB);

    const start = indexA <= indexB ? indexA : indexB;
    const end = indexA > indexB ? indexA : indexB;

    for (let i = start; i < end; i++) {
        subString += string[i];
    }

    return subString;
}

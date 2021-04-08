import chessBoard from './src/task1';
import isImpossiblePutInto from './src/task2';
import sortBySquare from './src/task3';
import isPalindrom from './src/task4';
import luckyTickets from './src/task5';
import sequence from './src/task6';
import fibonacciNumber from './src/task7';


// Task 1

const inputLength = document.getElementById('length');
const inputWidth = document.getElementById('width');
const inputSymbol = document.getElementById('symbol');
const resultContainer1 = document.querySelector('.task-1 .output-container textarea');

const drawBoard = () => {
    const length = +inputLength.value,
    width = +inputWidth.value,
    symbol = inputSymbol.value;

const result = chessBoard(length, width, symbol);

resultContainer1.value =  typeof result == 'string' ? result : `{status: ${result.status}, reason: ${result.reason}}`};

inputLength.addEventListener('input', drawBoard);
inputWidth.addEventListener('input', drawBoard);
inputSymbol.addEventListener('input', drawBoard);

// Task 2

const firstEnvelope = document.getElementById('first-envelop');
const secondEnvelope = document.getElementById('second-envelop');
const resultContainer2 = document.querySelector('.task-2 .output-container textarea');

const identifyEnvelope = () => {
    const firstArr = firstEnvelope.value.slice(1, firstEnvelope.value.length - 1).split(', ');
    const a = +firstArr[0].slice(2);
    const b = +firstArr[1].slice(2);
    const first = {a: a, b: b};

    const secondArr = secondEnvelope.value.slice(1, secondEnvelope.value.length - 1).split(', ');
    const c = +secondArr[0].slice(2);
    const d = +secondArr[1].slice(2);
    const second = {c: c, d: d};

    resultContainer2.value = isImpossiblePutInto(first, second);
}

firstEnvelope.addEventListener('input', identifyEnvelope);
secondEnvelope.addEventListener('input', identifyEnvelope);

// Task 3

const trianglesArea = document.querySelector('.task-3 .input-container textarea');
const resultContainer3 = document.querySelector('.task-3 .output-container textarea');

trianglesArea.addEventListener('change', () => {
    const triangles = trianglesArea.value.match(/{([^}]+)}/g).map(triangle => JSON.parse(triangle));
    resultContainer3.value = sortBySquare(triangles);
});

// Task 4

const inputNumber = document.getElementById('numberPalindrom');
const resultContainer4 = document.querySelector('.task-4 .output-container textarea');

inputNumber.addEventListener('input', () => resultContainer4.value = isPalindrom(+inputNumber.value));

// Task 5

const minTicket = document.getElementById('minTicket');
const maxTicket = document.getElementById('maxTicket');
const resultContainer5 = document.querySelector('.task-5 .output-container textarea');

const countTickets = () => {
    const context = {min: +minTicket.value, max: +maxTicket.value};
    resultContainer5.value = luckyTickets(context);
}

minTicket.addEventListener('input', countTickets);
maxTicket.addEventListener('input', countTickets);

// Task 6

const inputLength6 = document.getElementById('lengthN');
const inputZmk = document.getElementById('zmk');
const resultContainer6 = document.querySelector('.task-6 .output-container textarea');

const getSequence = () => resultContainer6.value = sequence(+inputLength6.value, +inputZmk.value);

inputLength6.addEventListener('input', getSequence);
inputZmk.addEventListener('input', getSequence);

// Task 7

const inputMin = document.getElementById('min');
const inputMax = document.getElementById('max');
const inputLengthFib = document.getElementById('lengthFib');
const resultContainer7 = document.querySelector('.task-7 .output-container textarea');

const getFibonacciNumber = () => {
    const context = {min: +inputMin.value, max: +inputMax.value, length: +inputLengthFib.value};
    resultContainer7.value = fibonacciNumber(context);
}

inputMin.addEventListener('input', getFibonacciNumber);
inputMax.addEventListener('input', getFibonacciNumber);
inputLengthFib.addEventListener('input', getFibonacciNumber);
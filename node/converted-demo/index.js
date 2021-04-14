const http = require('http');
const url = require('url');

const { chessBoard } = require('./task1');
const { isImpossiblePutInto } = require('./task2');
const { isPalindrom } = require('./task4');
const { luckyTickets } = require('./task5');
const { sequence } = require('./task6');
const { fibonacciNumber } = require('./task7');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    const query = url.parse(req.url, true).query;

    const { task } = query;

    switch (task) {
        case '1':
            const { l, w, s } = query;

            res.write(`Length: ${ l }, width: ${ w }, symbol: ${ s }\n${ parseObject(chessBoard(+l, +w, s))}`);
            console.log('Completed task 1');
            break;

        case '2': 
            const { a, b, c, d } = query;

            const env1 = {a: +a, b: +b};
            const env2 = {c: +c, d: +d};
            
            res.write(`First envelope: a = ${ a }, b = ${ b }\nSecond envelope: c = ${ c }, d = ${ d }\nResult = ${ parseObject(isImpossiblePutInto(env1, env2)) }`);
            console.log('Completed task 2');
            break;
        
        case '4':
            const { number } = query;

            res.write(`Number = ${ number }\nResult ${ parseObject(isPalindrom(+number)) }`);
            console.log('Completed task 4');
            break;

        case '5':
            let { min, max } = query;
            min = +min; max = +max;
            const object = { min, max };

            res.write(`Min = ${ min }, max = ${ max }\nResult ${ parseObject(luckyTickets(object)) }`);
            console.log('Completed task 5');
            break;

        case '6':
            const { n, m } = query;
        
            res.write(`n = ${ n }, m = ${ m }\nResult ${ parseObject(sequence(+n, +m)) }`);

            console.log('Completed task 6');
            break;

        case '7':
            const { min7, max7, length } = query;

            const objectFor7 = {min: +min7, max: +max7, length: +length};

            res.write(`Data: min ${ min7 }, max ${ max7 }, length ${ length }\nResult ${ parseObject(fibonacciNumber(objectFor7)) }`);
            console.log('Completed task 7');
            break;
    }
    res.end();
}).listen(8080);

const parseObject = response => {
    if (typeof response === 'object' && !Array.isArray(response)) {
        return `status: ${response.status}, reason: ${response.reason}`;
    } else return response;
};

console.log('Server started on http://localhost:8080');

// ?task=1&l=5&w=3&s=i
// ?task=2&a=5&b=3&c=8&d=10
// ?task=4&number=122356
// ?task=5&min=99&max=138
// ?task=6&n=9&m=178
// ?task=7&min7=9&max7=190&length=7
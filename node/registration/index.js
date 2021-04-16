const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const { type } = query;

    if (type === 'reg') {
        const { name, surname, login, password, email, dob } = query;

        const data = {
            name,
            surname,
            login,
            password,
            email,
            dob
        };

        fs.appendFile('./users.json', parce(data), error => {
            if (error) {
                res.writeHead(400, {'Content-Type' : 'text/plain'});
                res.write('Problem with registration. Try later');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                res.write('Account created succesfully!');
                res.end();
            }
        });
    }

    if (type === 'auth') {
        const { login, password } = query;

        let responses;
        fs.readFile('./users.json', (error, data) => {
            responses = JSON.parse(data).split(';');

            console.log(responses);
        })
    }
}).listen(8080);

const parce = data => `${ JSON.stringify(data)};`;


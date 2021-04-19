const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const { type } = query;

    // регистрация
    if (type === 'reg') {
        const { name, surname, login, password, email, dob } = query;

        const user = {
            name,
            surname,
            login,
            password,
            email,
            dob
        };

        try {
            // считывание содержимых данных
            const users = JSON.parse(fs.readFileSync('./users.json'));
            users.push(user);
            console.log(users);
            
            // запись поновой
            fs.writeFileSync('./users.json', JSON.stringify(users));

            res.writeHead(200, {'Content-Type':'text/plain'});
            res.write('Your account have been created succesfully');
            res.end();
        } catch (error) {
            console.log(error);
            res.writeHead(400, {'Content-Type':'text/plain'});
            res.write('Some errors happened.Try later');
            res.end();
        }

    }

    // авторизация
    if (type === 'auth') {
        const { login, password } = query;

        let users;
        fs.readFile('./users.json', (error, data) => {
            users = JSON.parse(data);
            console.log(users);

            for (let i = 0; i < users.length; i++) {
                if (users[i].login === login && users[i].password === password) {
                    res.writeHead(200, {'Content-Type':'text/plain'});
                    res.write(user);
                    res.end();

                    break;
                } else {
                    res.writeHead(418, {'Content-Type':'text/plain'});
                    res.write('There are not such data. You should registrate first.');
                    res.end();
                }
            }
        })
    }
}).listen(8080);



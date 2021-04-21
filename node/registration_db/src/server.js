const http = require('http');
const url = require('url');

const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mynode',
    password: '1234567',
    port: 5432
});

client.connect();

const checkingExistence = async(login, email) => {
    const { existedLoginRows } = await client.query(`SELECT * FROM users WHERE login = '${login}'`);
    const { existedEmailRows } = await client.query(`SELECT * FROM users WHERE email = '${email}'`);
    
    return [existedLoginRows.length === 0, existedEmailRows === 0];
};

const addUser = async(user) => {
    const { name, surname, login, password, email, dob, current_date } = user;

    try {
        await client.query(`INSERT INTO users(name, surname, login, password, email) VALUES ('${name}', '${surname}', '${login}', '${password}', '${email}')`);
        console.log('New user added');
        return [200, 'New user has been registrated'];
    } catch (err) {
        console.log(err.stack);
        return [400, 'Some errors happened. Try later'];
    }
};

const findUser = async(login, password) => {
    const registratedUser = await client.query(`SELECT * FROM users WHERE login = '${login}' AND paasword = '${password}'`);
    console.log(registratedUser);
    
    if (registratedUser) {
        return [200, registratedUser];
    } else {
        return [400, 'There is not such user'];
    }
};


http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const { type } = query;

    const getAnswer = answer => {
        res.writeHead(answer[0], {'Content-type': 'text/plain'});
        res.write(answer[1]);
        // res.end();
    }

    // регистрация
    if (type === 'reg') {
        const { name, surname, login, password, email, dob } = query;
        const current_date = new Date();

        const user = {
            name,
            surname,
            login,
            password,
            email,
            dob: new Date(dob),
            current_date: current_date.toISOString().substring(0, 10)
        };
        console.log(user);

        const existed = checkingExistence(user.login, user.email);

        if (existed[0] && existed[1]) {
            getAnswer(addUser(user));
        }
        if (!existed[0]) getAnswer([400, 'User with such login already exists']);
        if (!existed[1]) getAnswer([400, 'User with such email already exists']);

    }

    // авторизация
    if (type === 'auth') {
        const { login, password } = query;

        const user = findUser(login, password);

        // let users;
        // fs.readFile('./users.json', (error, data) => {
        //     users = JSON.parse(data);
        //     console.log(users);

        //     for (let i = 0; i < users.length; i++) {
        //         if (users[i].login === login && users[i].password === password) {
        //             res.writeHead(200, {'Content-Type':'text/plain'});
        //             res.write(user);
        //             res.end();

        //             break;
        //         } else {
        //             res.writeHead(418, {'Content-Type':'text/plain'});
        //             res.write('There are not such data. You should registrate first.');
        //             res.end();
        //         }
        //     }
        // })
    }

}).listen(8080);

console.log('Server hosted');
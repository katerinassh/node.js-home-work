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
    const resLogin = await client.query(`SELECT * FROM users WHERE login = '${login}'`);
    const resEmail = await client.query(`SELECT * FROM users WHERE email = '${email}'`);

    return [resLogin.rows.length === 0, resEmail.rows.length === 0];
};

const addUser = async(user) => {
    const { name, surname, login, password, email, dob, current_date } = user;

    try {
        await client.query(`INSERT INTO users(name, surname, login, password, email) VALUES ('${name}', '${surname}', '${login}', '${password}', '${email}')`);
        return [200, 'New user has been registrated'];
    } catch (err) {
        console.log(err.stack);
        return [416, 'Some errors happened. Try later'];
    }
};

const findUser = async(login, password) => {
    const res = await client.query(`SELECT * FROM users WHERE login = '${login}' AND password = '${password}'`);
    console.log(res);
    
    if (res.rows[0]) {
        return [200, JSON.stringify(res.rows[0])];
    } else {
        return [416, 'There is not such user'];
    }
};


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credential', '*');

    const query = url.parse(req.url, true).query;
    const { type } = query;

    const getAnswer = answer => {
        res.writeHead(answer[0], {'Content-type': 'text/plain'});
        res.write(answer[1]);
        console.log(answer[1]);
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

        checkingExistence(user.login, user.email)
        .then(res => {
            if (res[0] && res[1]) addUser(user).then(addingRes => getAnswer(addingRes));
            else if (!res[0]) getAnswer([416, 'User with such login already exists']);
            else getAnswer([416, 'User with such email already exists']);
        })
        .catch(err => console.error(err));
    }

    // авторизация
    if (type === 'auth') {
        const { login, password } = query;

        findUser(login, password).then(res => getAnswer(res));
    }

}).listen(8080);

console.log('Server hosted');
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mynode',
    password: '1234567',
    port: 5432
});

client.connect();

const checkingExisted = async(login, email) => {
    try {
        const { existedLoginRows } = await client.query(`SELECT * FROM users WHERE login = ${login}`);
        const { existedEmailRows } = await client.query(`SELECT * FROM users WHERE email = ${email}`);
        console.log('Checking complited with success');
        return [existedLoginRows.length, existedEmailRows.length];
    } catch (err) {
        console.log(err.stack);
        return [400, 'Some errors happened. Try later'];
    }
};

const addUser = async(user) => {
    const { name, surname, login, password, email, dob, current_date } = user;
    
    const checkingResults = await checkingExisted(login, email);

    if (checkingResults[0] !== 0) {
        return [416, 'User with such login already exists'];
    }
    if (checkingResults[1] !== 0) {
        return [416, 'User with such email already exists'];
    }

    try {
        await client.query(`INSERT INTO users(name, surname, login, password, email) VALUES ('${name}', '${surname}', '${login}', '${password}', '${email}')`);
        console.log('New user added');
        return [200, 'New user has been registrated'];
    } catch (err) {
        console.log(err.stack);
        return [400, 'Some errors happened. Try later'];
    }
};

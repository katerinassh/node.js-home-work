const { Client } = require ('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'demo2',
    password: '1234567',
    port: 5432
});

client.connect();

module.exports = client;
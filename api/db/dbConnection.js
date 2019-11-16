const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    database: 'auth',
    user: 'root',
    password: ''
});

conn.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Connected to database");
    }
});

module.exports = conn;
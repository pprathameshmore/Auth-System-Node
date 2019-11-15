const url = require('url');
const db = require('../db/dbConnection');

var lusername, lpassword;

exports.signin_request = (req, res) => {

    var body = "";

    req.on('data', (chuck) => {
        body += chuck.toString();
    });

    req.on('end', () => {
        var postBody = JSON.parse(body);
        console.log(postBody);

        db.query('SELECT username, password from users', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result[0].password);
                lusername = result[0].username;
                lpassword = result[0].password;
            }
        });

        if (postBody.username === lusername && postBody.password === lpassword) {
            const response = {
                message: "Auth successful"
            }
            res.statuCode = 200;
            res.setHeader('Content-Type', "application/json");
            res.end(JSON.stringify(response));
        } else {
            const response = {
                message: "Auth unsuccessful"
            }
            res.statuCode = 404;
            res.setHeader('Content-Type', "application/json");
            res.end(JSON.stringify(response));
        }

    });
}

exports.signup_request = (req, res) => {
    var credentials = "";

}
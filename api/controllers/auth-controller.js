const url = require('url');
const db = require('../db/dbConnection');

exports.signin_request = (req, res) => {

    var body = "";
    var lusername, lpassword;

    req.on('data', (data) => {
        body += data.toString();
    });

    req.on('end', () => {
        var postBody = JSON.parse(body);

        db.query('SELECT username, password from users', (err, result) => {
            if (err) {
                console.log(err);
            } else {

                if (result.length === 0) {
                    const response = {
                        statusCode: 404,
                        message: "User not found"
                    }
                    res.statusCode = 404;
                    res.setHeader('Content-Type', "application/json");
                    res.end(JSON.stringify(response));
                } else {
                    lusername = result[0].username;
                    lpassword = result[0].password;

                    if (postBody.username === lusername && postBody.password === lpassword) {
                        const response = {
                            statusCode: 200,
                            message: "Auth successful"
                        }
                        res.statuCode = 200;
                        res.setHeader('Content-Type', "application/json");
                        res.end(JSON.stringify(response));
                    } else {
                        const response = {
                            statusCode: 401,
                            message: "Auth unsuccessful"
                        }
                        res.statusCode = 401;
                        res.setHeader('Content-Type', "application/json");
                        res.end(JSON.stringify(response));
                    }

                }
            }
        });
    });
}


exports.signup_request = (req, res) => {
    var credentials = "";
    var userExists;

    req.on('data', (data) => {
        credentials += data.toString();
    });

    req.on('end', () => {
        var credentialsBody = JSON.parse(credentials);

        db.query('SELECT * FROM users where username = "' + credentialsBody.username + '"', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length === 0) {

                    db.query('INSERT INTO users (username, password) VALUES ( "' + credentialsBody.username + '","' + credentialsBody.password + '")');

                    const response = {
                        statusCode: 201,
                        message: "Registration successful"
                    }
                    res.statusCode = 201;
                    res.setHeader('Content-Type', "application/json");
                    res.end(JSON.stringify(response));

                } else if (result[0].username === credentialsBody.username) {
                    const response = {
                        statusCode: 409,
                        message: "User already exists"
                    }
                    res.statusCode = 409;
                    res.setHeader('Content-Type', "application/json");
                    res.end(JSON.stringify(response));
                }

            }
        });

    });

}
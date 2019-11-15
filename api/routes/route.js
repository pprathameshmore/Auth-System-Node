const http = require('http');
const url = require('url');

const db = require('../db/dbConnection');


module.exports = http.createServer((req, res) => {

    const authController = require('../controllers/auth-controller');
    const reqUrl = url.parse(req.url, true);


    if (reqUrl.path === '/signin' && req.method === 'POST') {
        console.log("Signin request hitted");
        //console.log(req);
        authController.signin_request(req, res);
    }

    if (reqUrl.path === '/signup' && req.method === 'POST') {
        console.log("Signup request hitted");
        console.log(req);
        authController.signup_request(req, res);
    }

});
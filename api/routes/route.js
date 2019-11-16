const http = require('http');
const url = require('url');

const db = require('../db/dbConnection');


module.exports = http.createServer((req, res) => {

    const authController = require('../controllers/auth-controller');
    const reqUrl = url.parse(req.url, true);


    if (reqUrl.path === '/signin' && req.method === 'POST') {
        authController.signin_request(req, res);
    }

    if (reqUrl.path === '/signup' && req.method === 'POST') {
        authController.signup_request(req, res);
    }

});
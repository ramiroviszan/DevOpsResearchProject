const apiRequest = require('request');
const { COMPANY_LOGIN_API_URL } = require('../config');

module.exports = (app) => {
    app.post('/api/login', (request, response) => {
        const userName = request.headers['user-name'];
        const password = request.headers['password'];
        console.log(userName);
        console.log(password);
        
        apiRequest.get(COMPANY_LOGIN_API_URL,
            {
                json: {
                    userName: userName,
                    password: password
                }
            },
            (apiError, apiResponse, apiBody) => {
                response.send(apiResponse.body['token']);
            });
    })
}
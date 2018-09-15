const customerLogic = require('../business-logic/customer.logic');

module.exports = function (app) {
    app.post('/api/CustomerLogin', (req, res) => {
        if (!req.headers.username || !req.headers.password){
            res.status(400).send('Username and Password are required.');
            return;
        }

        const credentials = {
            username: req.headers.username,
            password: req.headers.password
        };

        customerLogic.processLogin(credentials, (err, user) => {
            if(err || !user){
                res.status(401).send('Username or Password are not correct.');
            }else{
                res.send(user); 
            }
        });       
    });

    app.post('/api/CustomerLogout', (req, res) => {
        if (!req.headers.token){
            res.status(400).send('Current session token is required.');
            return;
        }

        const token = req.headers.token;
        customerLogic.processLogout(token, (err) => {
            if(err){
                res.status(401).send('The current session was not found.');
            }
            res.status(200).send();
        });       
    });
};
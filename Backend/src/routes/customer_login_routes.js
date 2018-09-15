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
};
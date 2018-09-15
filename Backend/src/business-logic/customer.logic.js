const customerDA = require('../data-access/customer-da');

function processLogin(credentials, cb){ 
    customerDA.getUser(credentials, (err, item) => {
        if(err || !item) return cb(err, item);
        else{
            customerDA.generateOIDAndSave(item, (error, user) => {
                return cb(error, user);
            });
        }
    });
};

module.exports.processLogin = processLogin;




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

function processLogout(token, cb){ 
    customerDA.clearToken(token, (err) => {
        return cb(err);
    });
};

module.exports.processLogin = processLogin;
module.exports.processLogout = processLogout;





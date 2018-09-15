//module.exports = (app) => {
//    app.get('/api/clients', () => {
//        console.log('GET CLIENTS NOT IMPLEMENTED');
//    })
//}

const clientDA = require('../data-access/client-da');

function getClient(id, cb){ 
    clientDA.getClient(id, (err, client) => {
        return cb(err, client);
    });
};

module.exports.getClient = getClient;


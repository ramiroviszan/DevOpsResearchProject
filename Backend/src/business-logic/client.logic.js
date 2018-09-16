//module.exports = (app) => {
//    app.get('/api/clients', () => {
//        console.log('GET CLIENTS NOT IMPLEMENTED');
//    })
//}

const clientDA = require('../data-access/client-da');
const rutValidator = require('../services/client-rut-validation.service')

function getClient(id, cb) {
    clientDA.getClient(id, (err, client) => {
        return cb(err, client);
    });
};

function updateClient(clientNewData, cb) {

    rutValidator.validateRUT(clientNewData.rut, (error, respStatus) => {
        console.log(error);
        console.log(respStatus);

        if (!error && respStatus == '200') {
            clientDA.updateClient(clientNewData, (err, client) => {
                return cb(err, client, null);
            });
        }else{
            return cb(error, null, respStatus);
        }
    });
}

module.exports.getClient = getClient;
module.exports.updateClient = updateClient;


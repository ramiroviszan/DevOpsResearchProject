//module.exports = (app) => {
//    app.get('/api/clients', () => {
//        console.log('GET CLIENTS NOT IMPLEMENTED');
//    })
//}

const clientDA = require('../data-access/client-da');
const rutValidator = require('../services/client-rut-validation.service')

function getClient(dataToSearch, cb) {

    clientDA.userBelongsToCompany(dataToSearch, (result) => {
        if (result == true) {
            clientDA.getClient(dataToSearch.id, (err, client) => {
                return cb(err, client);
            });
        } else {
            return cb('', null);
        }
    });
};

function updateClient(dataToSearch, clientNewData, cb) {

    clientDA.userBelongsToCompany(dataToSearch, (result) => {
        if (result == true) {
            rutValidator.validateRUT(clientNewData.rut, (error, respStatus) => {
                console.log(error);
                console.log(respStatus);

                if (!error && respStatus == '200') {
                    clientDA.updateClient(clientNewData, (err, client) => {
                        return cb(err, client, null);
                    });
                } else {
                    return cb(error, null, respStatus);
                }
            });
        }else{
            return cb('', null);
        }
    });
}

module.exports.getClient = getClient;
module.exports.updateClient = updateClient;


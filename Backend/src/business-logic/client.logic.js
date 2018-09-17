const clientDA = require('../data-access/client-da');
const rutValidator = require('../services/client-rut-validation.service');
const companyPermissions = require('../permissions/company.permissions');

function getAllClients(callback) {
    //check company logged in
    clientDA.getAllClients((error, clients) => {
        return callback(error, clients);
    });
   /*  if(companyPermissions('get-all-clients')) {
        
    }
    else {
        callback('Not enough permissions', null)
    } */
}

function createClient(newClient, callback) {
    //check company logged in
    clientDA.createClient(newClient, (error, createdClient) => {
        return callback(error, createdClient);
    });
   /*  if(companyPermissions('create-clients')) {
        
    }
    else {
        callback('Not enough permissions', null)
    } */
};

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

function getClientProjects(dataToSearch, cb){
    clientDA.userBelongsToCompany(dataToSearch, (result) => {
        if (result == true) {
            clientDA.getClientProjects(dataToSearch.id, (err, projects) => {
                return cb(err, projects);
            });
        } else {
            return cb('', null);
        }
    });
};

module.exports = {
    getClient,
    updateClient,
    getClientProjects,
    createClient,
    getAllClients
};
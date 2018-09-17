const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { DB_URL } = require('../config');

function getAllClients(callback) {
    MongoClient.connect(DB_URL, (error, database) => {
        if(error) return callback(error, null);
        else {
            database.collection('clients').find().toArray((internalError, clients) => {
                if(internalError) {
                    return callback(internalError, null);
                }
                else {
                    return callback(null, clients);
                }
            });
        }
    });
}

function createClient(newClient, callback) {
    MongoClient.connect(DB_URL, (error, database) => {
        if (error) return callback(error, null);
        else {
            newClient._id = new ObjectID(newClient._id);
            database.collection('clients').insertOne(newClient, (error, result) => {
                return callback(error, result.ops[0]);
            });
        }
        database.close();
    });
}

function userBelongsToCompany(dataToSearch, cb){
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(false);
        else {
            const queryuser = { 'token': new ObjectID(dataToSearch.token) };
            database.collection('users').findOne(queryuser, (errUser, itemUser) => {
                if(!errUser && itemUser && itemUser.id_client == dataToSearch.id) return cb(true);
                return cb(false);
            });
        }
    });
}

function getClient(id, cb) {
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            const query = { '_id': new ObjectID(id) };
            database.collection('clients').findOne(query, (error, item) => {
                return cb(error, item);
            });
        }
        database.close();
    });
};

function updateClient(clientNewData, cb) {
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            let query = { '_id': new ObjectID(clientNewData._id) };
            clientNewData._id = new ObjectID(clientNewData._id);
            console.log(clientNewData);
            console.log(query);
            database.collection('clients').findOneAndUpdate(query, clientNewData, {returnOriginal: false}, (error, res) => {
                return cb(error, res.value);
            });
        }
        database.close();
    });
};

function getClientProjects(clientId, cb){
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            const query = { 'id_client': new ObjectID(clientId) };
            database.collection('projects').find(query).toArray((error, items) => {
                return cb(error, items);
            });
        }
        database.close();
    });
}

module.exports = {
    getClient,
    updateClient,
    userBelongsToCompany,
    getClientProjects,
    createClient,
    getAllClients
}
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { DB_URL } = require('../config');

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

module.exports.getClient = getClient;
module.exports.updateClient = updateClient;
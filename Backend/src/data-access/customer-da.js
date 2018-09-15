const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { DB_URL } = require('../config');

function getUser(credentials, cb) {
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            const query = {
                'username': credentials.username,
                'password': credentials.password
            };
            database.collection('users').findOne(query, (error, item) => {
                return cb(error, item);
            });
        }
        database.close();
    });
};

function generateOIDAndSave(user, cb) {
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, null);
        else {
            let query = { _id: user._id };
            let newValues = { $set: { token: new ObjectID() } };
            database.collection('users').findOneAndUpdate(query, newValues, {returnOriginal: false}, (error, res) => {
                cb(error, res.value);
            });
        }
        database.close();
    });
};

module.exports.getUser = getUser;
module.exports.generateOIDAndSave = generateOIDAndSave;
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { DB_URL } = require('../config');

function getProjectComments(projectId, cb){
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            const query = { 'id_project': new ObjectID(projectId) };
            database.collection('comments').find(query).toArray((error, comments) => {
                return cb(error, comments);
            });
        }
        database.close();
    });
}

module.exports.getProjectComments = getProjectComments;
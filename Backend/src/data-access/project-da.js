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

function saveProjectComments(newComment, cb){
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            newComment.id_project = new ObjectID(newComment.id_project);
            database.collection('comments').insertOne(newComment, (error, result) => {
                return cb(error, result.ops[0]);
            });
        }
        database.close();
    });
}

module.exports.getProjectComments = getProjectComments;
module.exports.saveProjectComments = saveProjectComments;
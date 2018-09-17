const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { DB_URL } = require('../config');

function getAllProjects(callback) {
    MongoClient.connect(DB_URL, (error, database) => {
        if(error) return callback(error, null);
        else {
            database.collection('projects').find().toArray((internalError, projects) => {
                if(internalError) return callback(internalError, null);
                else {
                    return callback(null, projects);
                }
            });
        }
    });
}

function createProject(newProject, callback) {
    MongoClient.connect(DB_URL, (error, database) => {
        if(error) return callback(error, null);
        else {
            newProject._id = new ObjectID(newProject._id);
            database.collection('projects').insertOne(newProject, (error, result) => {
                return callback(error, result.ops[0]);
            });
        }
        database.close();
    });
}

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

function getProject(id, cb){
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            const query = { '_id': new ObjectID(id) };
            database.collection('projects').findOne(query, (error, item) => {
                return cb(error, item);
            });
        }
        database.close();
    });
}

function getUser(token, cb){
    MongoClient.connect(DB_URL, (err, database) => {
        if (err) return cb(err, database);
        else {
            const query = { 'token': new ObjectID(token) };
            database.collection('users').findOne(query, (error, item) => {
                return cb(error, item);
            });
        }
        database.close();
    });
}

module.exports = {
    getProjectComments,
    saveProjectComments,
    getProject,
    getUser,
    createProject,
    getAllProjects
}
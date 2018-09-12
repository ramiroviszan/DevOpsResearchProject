const clientRoutes = require('./client_routes');
const commentRoutes = require('./comment_routes');
const projectRoutes = require('./project_routes');
const userRoutes = require('./user_routes');

module.exports = function(app, db){
    clientRoutes(app,db);
    commentRoutes(app,db);
    projectRoutes(app,db);
    userRoutes(app,db);
};
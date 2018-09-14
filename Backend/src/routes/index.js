const companyLogin = require('./company-login')
//const clientRoutes = require('./client_routes');
//const commentRoutes = require('./comment_routes');
//const projectRoutes = require('./project_routes');

module.exports = (app) => {
    companyLogin(app);

    //clientRoutes(app);
    //commentRoutes(app);
    //projectRoutes(app);
    //userRoutes(app);
};
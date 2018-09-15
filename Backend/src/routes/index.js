const companyLogin = require('../services/company-login.service')
const clientLogic = require('../business-logic/client.logic');
//const commentRoutes = require('./comment_routes');
//const projectRoutes = require('./project_routes');

module.exports = (app) => {
    companyLogin(app);
    clientLogic(app);

    //commentRoutes(app);
    //projectRoutes(app);
    //userRoutes(app);
};
const companyLogin = require('../services/company-login.service');
const customerLogin = require('./customer_login_routes');
const projectRoutes = require('./project_routes');
const clientRoutes = require('./client_routes')

module.exports = (app) => {
    companyLogin(app);
    customerLogin(app);

    projectRoutes(app);
    clientRoutes(app);
};
import { Router } from "express";
import enterpriseLogin from "./enterprise-login.route";
import customerLogin from "./customer-login.route";
import clientRoutes from "./clients.route";
import projectRoutes from "./projects.route";

export default (router: Router) => {
    enterpriseLogin(router);
    customerLogin(router);
    clientRoutes(router);
    projectRoutes(router);
}
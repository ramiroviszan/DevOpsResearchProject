import { Router } from "express";
import enterpriseLogin from "./enterprise-login.route";

export default (router: Router) => {
    enterpriseLogin(router);
}
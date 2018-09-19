import { Router } from "express";
import loginCompany from "./login-company.route";

export default (router: Router) => {
    loginCompany(router);
}
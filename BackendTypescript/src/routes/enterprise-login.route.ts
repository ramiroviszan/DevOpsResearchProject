import { Router, Request, Response } from "express";
import enterpriseLoginController from "../controllers/enterprise-login.controller";

export default (router: Router) => {
    router.post("/login/enterprise", (request: Request, response: Response) => {
        const username = request.body["username"];
        const password = request.body["password"];

        enterpriseLoginController.login(username, password)
            .then((token) => {
                response.setHeader("Authorization", token);
                response.send();
            })
            .catch(({ statusCode, message }) => {
                response.status(statusCode).send(message);
            });
    });

    router.post("/logout/enterprise", (request: Request, response: Response) => {
        const token = request.header("Authorization");
        enterpriseLoginController.logout(token);
    });
};
import { Router, Request, Response } from "express";
import enterpriseAuthController from "../controllers/enterprise-auth.controller";

export default (router: Router) => {
    router.post("/login/enterprise", (request: Request, response: Response) => {
        const username = request.body["username"];
        const password = request.body["password"];

        enterpriseAuthController.login(username, password)
            .then((token) => {
                response.setHeader("Authorization", token);
                response.send();
            })
            .catch(reason => {
                response.status(reason.statusCode).send(reason.message);
            });
    });
};
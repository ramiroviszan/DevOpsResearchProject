import { Router, Request, Response } from "express";
import customerController from "../controllers/customer-auth.controller";

export default (router: Router) => {
    router.post("/login/customer", (request: Request, response: Response) => {
        const username = request.body["username"];
        const password = request.body["password"];

        customerController.processLogin(username, password)
            .then((user) => {
                response.setHeader("Authorization", user.token + '');
                response.send(user);
            })
            .catch(reason => {
                console.log(reason);
                response.status(reason.statusCode).send(reason.message);
            });
    });
};
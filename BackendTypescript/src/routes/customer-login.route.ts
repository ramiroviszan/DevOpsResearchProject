import { Router, Request, Response } from "express";
import customerController from "../controllers/customer-auth.controller";

export default (router: Router) => {
    router.post("/login/customer", (request: Request, response: Response) => {
        const username = request.body["username"];
        const password = request.body["password"];

        customerController.processLogin(username, password)
            .then((user) => {
                console.log("[ROUTER] Then ProcessLogin");
                response.setHeader("Authorization", user.token + '');
                response.send(user);
            })
            .catch(reason => {
                console.log("[ROUTER] Catch ProcessLogin");
                console.log("[ROUTER] " + reason);
                response.status(reason.statusCode).send(reason.message);
            });
    });
    router.post("/logout/customer", (request: Request, response: Response) => {
        const token: string = <string>request.headers['authorization'];
        customerController.processLogout(token)
            .then(() => {
                response.status(200).send();
            })
            .catch(reason => {
                response.status(reason.statusCode).send(reason.message);
            });
    });
};
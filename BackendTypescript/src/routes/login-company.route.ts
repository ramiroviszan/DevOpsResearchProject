import { Router, Request, Response } from "express";
import loginCompanyController from "../controllers/login-company.controller";

export default (router: Router) => {
    router.post("/login/company", (request: Request, response: Response) => {
        loginCompanyController.login(request.header("username"), request.header("password"), (errorMessage, token) => {
            if (errorMessage) {
                response.status(400).send(errorMessage);
            }
            else {
                response.setHeader("Authorization", token);
                response.send();
            }
        });
    });

    router.post("/logout/company", (request: Request, response: Response) => {
        loginCompanyController.logout(request.header("x-auth"), (errorMessage, success) => {
            if (errorMessage) {
                response.status(400).send(errorMessage);
            } else {
                if (!success) {
                    response.status(400).send("Erorr desconocido");
                } else {
                    response.send();
                }
            }
        });

        // MIDDLEWARE
        // loginCompanyController.verify(request.header("x-auth"), (errorMessage, credentials) => {
        //     if (errorMessage) {
        //         response.status(400).send(errorMessage);
        //     } else {
        //         response.send();
        //     }
        // });
    });
};
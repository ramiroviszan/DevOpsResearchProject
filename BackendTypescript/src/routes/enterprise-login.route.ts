import { Router, Request, Response } from "express";
import enterpriseAuthController from "../controllers/enterprise-auth.controller";

export default (router: Router) => {
    router.post("/login/enterprise", async (request: Request, response: Response) => {
        const username = request.body["username"];
        const password = request.body["password"];

        try {
            const token = await enterpriseAuthController.login(username, password);
            response.setHeader("Authorization", token);
            response.send({ token });
        }
        catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
};
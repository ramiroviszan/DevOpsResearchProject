import { Router, Request, Response } from "express";

export default (router: Router) => {
    router.post("/login/company", (request: Request, response: Response) => {
        response.send("ok!");
    });
};
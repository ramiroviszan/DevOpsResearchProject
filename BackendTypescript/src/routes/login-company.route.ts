import { Router, Request, Response } from "express";
import ICredentials from "../models/credentials.model";
var cors = require('cors');

export default (router: Router) => {
    router.use(cors());

    router.post("/login/company", (request: Request, response: Response) => {
        let session: ICredentials = {
            username: request.header("username"),
            password: request.header("password")
        };
        //get token from credentials
        response.send(session);
    });
};
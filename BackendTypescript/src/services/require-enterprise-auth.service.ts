import { Request } from "express";
import * as jwt from "jsonwebtoken";
import RejectReason from "../models/reject-reason.model";
import config from "../config";
import EnterpriseUser from "../models/enterprise-user.mode";

export default (request: Request): Promise<EnterpriseUser> => {
    return new Promise((resolve, reject) => {
        const token = request.header("Authorization");
        if (!token) {
            const reason: RejectReason = {
                message: "Missing Authorization header",
                statusCode: 401
            };
            reject(reason);
        }
        try {
            const decodedToken = jwt.verify(token, config.JWT_SECRET);

            const user: EnterpriseUser = {
                username: decodedToken["username"]
            };
            resolve(user);
        }
        catch {
            const reason: RejectReason = {
                message: "Invalid Token",
                statusCode: 400
            }
            reject(reason);
        }
    });
}
import config from "../config";
import * as request from "request-promise-native";
import * as jwt from "jsonwebtoken";
import EnterpriseUser from "../models/enterprise-user.mode";

export default {
    login(username: string, password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const options: request.RequestPromiseOptions = {
                headers: {
                    "Authorization": config.ENTERPRISE_AUTH_API_TOKEN
                },
                body: {
                    "username": username,
                    "password": password
                },
                json: true
            };
            request.post(config.ENTERPRISE_AUTH_API_URL, options)
                .then(({ apiToken }) => {
                    const user: EnterpriseUser = {
                        username
                    };
                    const options: jwt.SignOptions = {
                        expiresIn: "1h"
                    }
                    const token: string = jwt.sign(user, config.JWT_SECRET, options);

                    resolve(token);
                })
                .catch(({ statusCode, message }) => {
                    reject({ statusCode, message });
                });
        });
    },
    verify(token: string): Promise<EnterpriseUser> {
        return new Promise((resolve, reject) => {
            try {
                const decodedToken = jwt.verify(token, config.JWT_SECRET);

                const user: EnterpriseUser = {
                    username: decodedToken["username"]
                };
                resolve(user);
            }
            catch {
                const reason = {
                    message: "Invalid Token",
                    statusCode: 400
                }
                reject(reason);
            }
        });
    }
};
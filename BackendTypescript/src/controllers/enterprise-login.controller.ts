import config from "../config";
import * as request from "request-promise-native";

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
                .then(({ token }) => {
                    resolve(token);
                })
                .catch(({ statusCode, message }) => {
                    reject({ statusCode, message });
                });
        });
    },
    verify(token: string): string {
        return "";
    },
    logout(token: string): boolean {
        return false;
    }
};
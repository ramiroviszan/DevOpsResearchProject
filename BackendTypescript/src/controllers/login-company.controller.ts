import ICredentials from "../models/credentials.model";
import session from "../services/session.service";
import { SHA256 } from "crypto-js";
import config from "../config";

interface IVerifyCallback { (errorMessage: string, username: string): void }
interface ILogoutCallback { (errorMessage: string, success: boolean): void }

export default {
    login(username: string, password: string): string {
        const hashedPassword: string = SHA256(password + config.HASH_SALT).toString();

        const credentials: ICredentials = {
            username,
            password: hashedPassword
        };

        const token: string = session.signCredentials(credentials);
        //sessionDataAccess.saveToken(token, username????);

        return token;
    },
    verify(token: string, callback: IVerifyCallback): string {
        session.verifyCredentials(token, undefined, (error, decoded) => {
            if (error) {
                return callback("Error al verificar las credenciales", undefined);
            }
            else {
                const username = decoded['username'];
                if (username) {
                    console.log(username);
                    return callback(undefined, username);
                } else {
                    return callback("Error al verificar las credenciales", undefined);
                }
            }
        });

        return token;
    },
    logout(token: string, callback: ILogoutCallback): void {
        //sessionDataAccess.revokeToken(token, (error, success) => {...});
        callback(undefined, true);
    }
};
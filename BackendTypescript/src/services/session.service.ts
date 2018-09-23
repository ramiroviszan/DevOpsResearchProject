import config from "../config";
import ICredentials from "../models/credentials.model";
import * as jwt from "jsonwebtoken";
import ISession from "./isession.service";

const session: ISession = {
    signCredentials(credentials: ICredentials, options?: jwt.SignOptions, callback?: jwt.SignCallback): string {
        const defaultJwtOptions: jwt.SignOptions = {
            expiresIn: 8600
        };
        const jwtOptions = options == undefined ? defaultJwtOptions : options;

        const encodedCredentials = jwt.sign(credentials, config.JWT_SECRET, jwtOptions);
        return encodedCredentials;
    },
    verifyCredentials(encodedCredentials: string, options?: jwt.VerifyOptions, callback?: jwt.VerifyCallback): void {
        jwt.verify(encodedCredentials, config.JWT_SECRET, options, callback);
    }
};

export default session;
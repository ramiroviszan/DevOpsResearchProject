import ICredentials from "../models/credentials.model";
import { VerifyOptions, VerifyCallback, SignCallback, SignOptions } from "jsonwebtoken";

export default interface ISession {
    signCredentials(credentials: ICredentials, options?: SignOptions, callback?: SignCallback): string;
    verifyCredentials(encodedCredentials: string, options?: VerifyOptions, callback?: VerifyCallback): void;
}
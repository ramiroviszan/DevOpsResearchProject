import ICredentials from "../models/credentials.model";

interface ISessionSavedCallback { (errorMessage: string, token: string): void };
interface ISessionObtainedCallback { (errorMessage: string, token: string): void };
interface ISessionRevokedCallback { (errorMessage: string, success: boolean): void };

interface ISessionDataAccess {
    saveToken(token: string, credentials: ICredentials, callback: ISessionSavedCallback): void;
    getToken(username: string, callback: ISessionObtainedCallback): void;
    revokeToken(token: string, callback: ISessionRevokedCallback): void;
}

export {
    ISessionDataAccess,
    ISessionSavedCallback,
    ISessionObtainedCallback,
    ISessionRevokedCallback
}
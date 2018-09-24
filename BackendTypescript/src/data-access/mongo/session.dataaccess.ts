import * as mongodb from "mongodb";
import config from "../../config";
import mongoConfig from "./mongo.config";
import { ISessionDataAccess, ISessionSavedCallback, ISessionObtainedCallback, ISessionRevokedCallback } from "../isession.dataaccess";
import SessionDTO from "./data-transfer-objects/session.dto";
import ICredentials from "../../models/credentials.model";

const MongoClient = mongodb.MongoClient;

class SessionMongoDataAccess implements ISessionDataAccess {
    saveToken(token: string, credentials: ICredentials, callback: ISessionSavedCallback): void {
        const tokenToSave: SessionDTO = new SessionDTO();

        tokenToSave._id = new mongodb.ObjectID();
        tokenToSave.username = credentials.username;
        tokenToSave.password = credentials.password;
        tokenToSave.token = token;

        MongoClient.connect(config.DB_URL, (error, client) => {
            if (error) {
                return callback("Error al conectarse a la base de datos", undefined);
            }
            else {
                client.db().collection(mongoConfig.COMPANY_SESSIONS_COLLECTION).insertOne(tokenToSave, (error, result) => {
                    if (error) {
                        return callback("Error al conectarse a la base de datos", undefined);
                    }
                    else {
                        return callback(undefined, result.ops[0].token);
                    }
                });
            }
        })
    };
    getToken(username: string, callback: ISessionObtainedCallback): void {
        throw new Error("Method not implemented.");
    };
    revokeToken(token: string, callback: ISessionRevokedCallback): void {
        throw new Error("Method not implemented.");
    }
}

export default new SessionMongoDataAccess();
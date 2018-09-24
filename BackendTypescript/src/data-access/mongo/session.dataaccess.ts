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

        MongoClient.connect(config.DB_URL, { useNewUrlParser: true }, (error, client) => {
            if (error) {
                console.log(error);
                return callback("Error al conectarse a la base de datos", undefined);
            }
            else {
                client.db().collection(mongoConfig.COMPANY_SESSIONS_COLLECTION).insertOne(tokenToSave, (error, result) => {
                    if (error) {
                        return callback("Error al guardar la sesion", undefined);
                    }
                    else {
                        console.log(result.ops[0].token);
                        return callback(undefined, result.ops[0].token); //Comprobar si esta bien
                    }
                });
            }
        });
    };
    getToken(username: string, callback: ISessionObtainedCallback): void {
        const tokenToFind: SessionDTO = new SessionDTO();
        tokenToFind.username = username;

        MongoClient.connect(config.DB_URL, { useNewUrlParser: true }, (error, client) => {
            if (error) {
                return callback("Error al conectarse a la base de datos", undefined);
            }
            else {
                client.db().collection(mongoConfig.COMPANY_SESSIONS_COLLECTION).findOne(tokenToFind, (error, result) => {
                    if (error) {
                        return callback("Error al obtener la sesion. Pruebe ingresando al sistema nuevamente.", undefined);
                    }
                    else {
                        console.log(result.ops[0].token);
                        return callback(undefined, result.ops[0].token)
                    }
                });
            }
        });
    };
    revokeToken(token: string, callback: ISessionRevokedCallback): void {
        const tokenToDelete: SessionDTO = new SessionDTO();
        tokenToDelete.token = token;

        MongoClient.connect(config.DB_URL, { useNewUrlParser: true }, (error, client) => {
            if (error) {
                return callback("Error al conectarse a la base de datos", undefined);
            }
            else {
                client.db().collection(mongoConfig.COMPANY_SESSIONS_COLLECTION).findOneAndDelete(tokenToDelete, (error, result) => {
                    if (error) {
                        return callback("Error al obtener la sesion. Pruebe ingresando al sistema nuevamente.", undefined);
                    }
                    else {
                        console.log(result.ok);
                        return callback(undefined, result.ok === 1);
                    }
                });
            }
        });
    }
}

export default new SessionMongoDataAccess();
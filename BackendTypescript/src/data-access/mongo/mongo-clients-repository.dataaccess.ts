import ClientsRepository from "../interfaces/clients-repository.dataaccess";
import { MongoClient } from "mongodb";
import config from "../../config";
import mongoConfig from "./mongo.config";
import RejectReason from "../../models/reject-reason.model";
import { ClientDTO } from "../data-transfer-objects/client.dto";

const mongoClient = new MongoClient(config.DB_URL, { useNewUrlParser: true });

const mongoClientsRepo: ClientsRepository = {
    add(client: ClientDTO): Promise<ClientDTO> {
        return new Promise((resolve, reject) => {
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.CLIENTS_COLLECTION).insertOne(client)
                        .then(writeResult => {
                            resolve(writeResult.ops[0]);
                        })
                        .catch(({ errmsg }) => {
                            const reason: RejectReason = {
                                statusCode: 400,
                                message: errmsg
                            };
                            reject(reason);
                        });
                })
                .catch(({ errmsg }) => {
                    const reason: RejectReason = {
                        statusCode: 400,
                        message: errmsg
                    };
                    reject(reason);
                });
        });
    },
    modify(client: ClientDTO): Promise<ClientDTO> {
        throw new Error();
    },
    remove(client: ClientDTO): Promise<any> {
        throw new Error();
    },
    getAll(): Promise<ClientDTO[]> {
        return new Promise((resolve, reject) => {
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.CLIENTS_COLLECTION).find().toArray()
                        .then(findResult => {
                            resolve(findResult);
                        })
                        .catch(({ errmsg }) => {
                            const reason: RejectReason = {
                                statusCode: 400,
                                message: errmsg
                            };
                            reject(reason);
                        });
                })
                .catch(({ errmsg }) => {
                    const reason: RejectReason = {
                        statusCode: 400,
                        message: errmsg
                    };
                    reject(reason);
                });
        });
    }
}

export default mongoClientsRepo;
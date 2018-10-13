import CustomerUsersRepository from "../interfaces/customer-users-repository.dataaccess";
import { MongoClient } from "mongodb";
import config from "../../config";
import mongoConfig from "./mongo.config";
import RejectReason from "../../models/reject-reason.model";
import User from "../../models/customer-user.model";
import { CustomerUserDTO } from "../data-transfer-objects/customer-user.dto";
import { ObjectID } from "bson";

const mongoClient = new MongoClient(config.DB_URL, { useNewUrlParser: true });

const mongoClientsRepo: CustomerUsersRepository = {
    add(customerUserDTO: CustomerUserDTO): Promise<CustomerUserDTO> {
        return new Promise((resolve, reject) => {
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.USERS_COLLECTION).insertOne(customerUserDTO)
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
    get(username: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const query = { 'username': username, 'password': password };
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.USERS_COLLECTION).findOne(query)
                        .then(findResult => {
                            console.log("[MONGO] Then Get");
                            resolve(findResult);
                        })
                        .catch(({ errmsg }) => {
                            console.log("[MONGO] Catch Get");
                            const reason: RejectReason = {
                                statusCode: 400,
                                message: errmsg
                            };
                            reject(reason);
                        });
                })
                .catch(({ errmsg }) => {
                    console.log("[MONGO] Catch Get -> Connect");
                    const reason: RejectReason = {
                        statusCode: 400,
                        message: errmsg
                    };
                    reject(reason);
                });
        });
    },
    modify(customerUser: CustomerUserDTO): Promise<any> {
        return new Promise((resolve, reject) => {
            let query = { _id: customerUser._id };
            let newValues = {
                $set: {
                    _id: customerUser._id,
                    username: customerUser.username,
                    password: customerUser.password,
                    id_client: customerUser.id_client,
                    token: customerUser.token
                }
            };
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.USERS_COLLECTION).findOneAndUpdate(query, newValues, { returnOriginal: false })
                        .then(updatedUser => {
                            console.log("[MONGO] Then Modify");
                            resolve(updatedUser.value);
                        })
                        .catch(({ errmsg }) => {
                            console.log("[MONGO] Catch Modify");
                            const reason: RejectReason = {
                                statusCode: 400,
                                message: errmsg
                            };
                            reject(reason);
                        });
                })
                .catch(({ errmsg }) => {
                    console.log("[MONGO] Catch Modify -> Connect");
                    const reason: RejectReason = {
                        statusCode: 400,
                        message: errmsg
                    };
                    reject(reason);
                });
        });
    },
    clear(token: string): Promise<CustomerUserDTO> {
        return new Promise((resolve, reject) => {
            let query = { token: new ObjectID(token) };
            let newValues = { $set: { token: '' } };
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.USERS_COLLECTION).findOneAndUpdate(query, newValues, { returnOriginal: false })
                        .then((updatedUser) => {
                            resolve(updatedUser.value);
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
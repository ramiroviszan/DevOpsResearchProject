import CustomerUsersRepository from "../interfaces/customer-users-repository.dataaccess";
import { MongoClient } from "mongodb";
import config from "../../config";
import mongoConfig from "./mongo.config";
import RejectReason from "../../models/reject-reason.model";
import User from "../../models/customer-user.model";

const mongoClient = new MongoClient(config.DB_URL, { useNewUrlParser: true });

const mongoClientsRepo: CustomerUsersRepository = {
    get(username: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const query = { 'username': username, 'password': password };
            console.log(query);
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.USERS_COLLECTION).findOne(query)
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
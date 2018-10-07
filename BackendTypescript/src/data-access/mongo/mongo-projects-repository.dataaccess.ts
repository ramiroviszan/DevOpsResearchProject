import ProjectsRepository from "../interfaces/projects-repository.dataaccess";
import { MongoClient } from "mongodb";
import config from "../../config";
import mongoConfig from "./mongo.config";
import RejectReason from "../../models/reject-reason.model";
import { ProjectDTO } from "../data-transfer-objects/project.dto";

const mongoClient = new MongoClient(config.DB_URL, { useNewUrlParser: true });

const mongoProjectsRepo: ProjectsRepository = {
    add(project: ProjectDTO): Promise<ProjectDTO> {
        return new Promise((resolve, reject) => {
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.PROJECTS_COLLECTION).insertOne(project)
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
    modify(project: ProjectDTO): Promise<ProjectDTO> {
        throw new Error();
    },
    remove(project: ProjectDTO): Promise<any> {
        throw new Error();
    },
    getAll(): Promise<ProjectDTO[]> {
        return new Promise((resolve, reject) => {
            mongoClient.connect()
                .then(mongoClient => {
                    mongoClient.db().collection(mongoConfig.PROJECTS_COLLECTION).find().toArray()
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
};

export default mongoProjectsRepo;
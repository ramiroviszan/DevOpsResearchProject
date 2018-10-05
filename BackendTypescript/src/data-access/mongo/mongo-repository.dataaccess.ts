import Repository from "../interfaces/repository.dataaccess";
import mongoClientsRepository from "./mongo-clients-repository.dataaccess";

const mongoRepository: Repository = {
    clients: mongoClientsRepository
};

export default mongoRepository;
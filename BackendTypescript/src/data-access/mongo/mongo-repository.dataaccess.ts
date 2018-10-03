import Repository from "../interfaces/repository.dataaccess";
import MongoClientsRepository from "./mongo-clients-repository.dataaccess";

class MongoRepository implements Repository {
    clients: MongoClientsRepository;
}

export default new MongoRepository();
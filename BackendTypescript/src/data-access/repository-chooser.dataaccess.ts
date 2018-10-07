import Repository from "./interfaces/repository.dataaccess";
import mongoRepository from "./mongo/mongo-repository.dataaccess";

const repository: Repository = mongoRepository;

export default repository;
import IRepository from "./interfaces/repository.dataaccess";
import mongoRepository from "./mongo/mongo-repository.dataaccess";

const repository: IRepository = mongoRepository;

export default repository;
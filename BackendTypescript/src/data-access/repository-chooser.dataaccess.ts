import IRepository from "./irepository.dataaccess";
import mongoRepository from "./mongo/mongo-repository.dataaccess";

const repository: IRepository = mongoRepository;

export default repository;
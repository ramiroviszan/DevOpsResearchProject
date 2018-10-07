import Repository from "../interfaces/repository.dataaccess";
import mongoClientsRepository from "./mongo-clients-repository.dataaccess";
import mongoCustomerUsersRepository from "./mongo-customer-users-repository.dataaccess";
import mongoProjectsRepository from "./mongo-projects-repository.dataaccess";

const mongoRepository: Repository = {
    clients: mongoClientsRepository,
    customerUsers: mongoCustomerUsersRepository,
    projects: mongoProjectsRepository
};

export default mongoRepository;
import ClientsRepository from "./clients-repository.dataaccess";
import CustomerUsersRepository from "./customer-users-repository.dataaccess";
import ProjectsRepository from "./projects-repository.dataaccess";

interface Repository {
    clients: ClientsRepository;
    customerUsers: CustomerUsersRepository;
    projects: ProjectsRepository;
}

export default Repository;
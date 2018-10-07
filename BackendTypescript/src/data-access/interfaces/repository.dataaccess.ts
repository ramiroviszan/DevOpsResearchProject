import clientsRepository from "./clients-repository.dataaccess";
import customerUsersRepository from "./customer-users-repository.dataaccess";

interface Repository {
    clients: clientsRepository;
    customerUsers: customerUsersRepository;
}

export default Repository;
import ClientsRepository from "./clients-repository.dataaccess";

interface Repository {
    clients: ClientsRepository;
}

export default Repository;

export {
    ClientsRepository
}
import Client from "../../models/client.model";
import ClientsRepository from "../interfaces/clients-repository.dataaccess";

const mongoClientsRepo: ClientsRepository = {
    add(client: Client): Promise<Client> {
        return new Promise((resolve, reject) => {
            resolve(client);
        });
    },
    modify(client: Client): Promise<Client> {
        throw new Error();
    },
    remove(client: Client): Promise<any> {
        throw new Error();
    },
    getAll():Promise<Client[]> {
        throw new Error();
    }
}

export default mongoClientsRepo;
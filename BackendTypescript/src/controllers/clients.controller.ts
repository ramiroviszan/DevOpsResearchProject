import Client from "../models/client.model";
import repository from "../data-access/repository-chooser.dataaccess";
import { ClientDTO, clientToDTO, dtoToClient, dtoToClientArray } from "../data-access/data-transfer-objects/client.dto";

export default {
    createClient(client: Client): Promise<Client> {
        return new Promise((resolve, reject) => {
            const clientDTO: ClientDTO = clientToDTO(client);
            repository.clients.add(clientDTO)
                .then(addedClientDTO => {
                    const addedClient: Client = dtoToClient(addedClientDTO);
                    resolve(addedClient);
                })
                .catch(reason => {
                    reject(reason);
                });
        });
    },
    getAllClients(): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            repository.clients.getAll()
                .then(clientDTOs => {
                    const clients: Client[] = dtoToClientArray(clientDTOs);
                    resolve(clients);
                })
                .catch(reason => {
                    reject(reason);
                });
        });
    }
}
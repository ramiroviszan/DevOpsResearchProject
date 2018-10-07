import Client from "../models/client.model";
import repository from "../data-access/repository-chooser.dataaccess";
import { ClientDTO, clientToDTO, dtoToClient, dtoToClientArray } from "../data-access/data-transfer-objects/client.dto";
import validClient from "../validators/client.validator";
import RejectReason from "../models/reject-reason.model";

export default {
    createClient(client: Client): Promise<Client> {
        return new Promise((resolve, reject) => {
            if (!validClient(client)) {
                const reason: RejectReason = {
                    message: "Invalid client",
                    statusCode: 400
                }
                reject(reason);
            }
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
    getClient(companyName: string): Promise<Client> {
        return new Promise((resolve, reject) => {
            repository.clients.get(companyName)
                .then(clientDTO => {
                    const client: Client = dtoToClient(clientDTO);
                    resolve(client);
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
import Client from "../models/client.model";
import repository from "../data-access/repository-chooser.dataaccess";
import { ClientDTO, clientToDTO, dtoToClient, dtoToClientArray } from "../data-access/data-transfer-objects/client.dto";
import validClient from "../validators/client.validator";
import validUser from "../validators/user.validator";
import RejectReason from "../models/reject-reason.model";
import User from "../models/customer-user.model";
import { CustomerUserDTO, customerToDTO, dtoToCustomerUser } from "../data-access/data-transfer-objects/customer-user.dto";
import { ObjectID } from "bson";

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
            else {
                const clientDTO: ClientDTO = clientToDTO(client);

                repository.clients.add(clientDTO)
                    .then(addedClientDTO => {
                        const addedClient: Client = dtoToClient(addedClientDTO);
                        resolve(addedClient);
                    })
                    .catch(reason => {
                        reject(reason);
                    });
            }
        });
    },
    createClientUser(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            if (!validUser(user)) {
                const reason: RejectReason = {
                    message: "Invalid user",
                    statusCode: 400
                }
                reject(reason);
            }
            if (!ObjectID.isValid(user.id_client)) {
                const reason: RejectReason = {
                    message: "Invalid client ID",
                    statusCode: 400
                }
                reject(reason);
            }
            else {
                repository.clients.get({ _id: new ObjectID(user.id_client) })
                    .then(clientDTO => {
                        const userDTO: CustomerUserDTO = customerToDTO(user);

                        repository.customerUsers.add(userDTO)
                            .then(addedUserDTO => {
                                const addedUser: User = dtoToCustomerUser(addedUserDTO);
                                resolve(addedUser);
                            })
                            .catch(reason => {
                                reject(reason);
                            });
                    })
                    .catch(reason => {
                        reject(reason);
                    });
            }
        });
    },
    getClient(companyName: string): Promise<Client> {
        return new Promise((resolve, reject) => {
            repository.clients.get({ companyName })
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
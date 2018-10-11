import Client from "../models/client.model";
import repository from "../data-access/repository-chooser.dataaccess";
import { ClientDTO, clientToDTO, dtoToClient, dtoToClientArray } from "../data-access/data-transfer-objects/client.dto";
import validClient from "../validators/client.validator";
import validUser from "../validators/user.validator";
import validID from "../validators/object-id.validator";
import RejectReason from "../models/reject-reason.model";
import User from "../models/customer-user.model";
import { CustomerUserDTO, customerToDTO, dtoToCustomerUser } from "../data-access/data-transfer-objects/customer-user.dto";
import { ObjectID } from "bson";

export default {
    async createClient(client: Client): Promise<Client> {
        await validClient(client);

        const clientDTO: ClientDTO = clientToDTO(client);
        const addedClientDTO: ClientDTO = await repository.clients.add(clientDTO);

        const addedClient: Client = dtoToClient(addedClientDTO);
        return addedClient;
    },
    async createClientUser(user: User): Promise<User> {
        await validUser(user);
        await validID(user.id_client);
        await repository.clients.get({ _id: new ObjectID(user.id_client) });

        const userDTO: CustomerUserDTO = customerToDTO(user);
        const addedUserDTO = await repository.customerUsers.add(userDTO);

        const addedUser: User = dtoToCustomerUser(addedUserDTO);
        return addedUser;
    },
    async getClient(companyName: string): Promise<Client> {
        const clientDTO: ClientDTO = await repository.clients.get({ companyName });

        const client: Client = dtoToClient(clientDTO);
        return client;
    },
    async getAllClients(): Promise<Client[]> {
        const clientDTOs: ClientDTO[] = await repository.clients.getAll();

        const clients: Client[] = dtoToClientArray(clientDTOs);
        return clients;
    }
}
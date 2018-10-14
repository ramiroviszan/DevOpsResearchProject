import Client from "../models/client.model";
import repository from "../data-access/repository-chooser.dataaccess";
import { ClientDTO, clientToDTO, dtoToClient, dtoToClientArray } from "../data-access/data-transfer-objects/client.dto";
import validClient from "../validators/client.validator";
import validUser from "../validators/user.validator";
import validID from "../validators/object-id.validator";
import RejectReason from "../models/reject-reason.model";
import User from "../models/customer-user.model";
import Project from "../models/project.model";
import { CustomerUserDTO, customerToDTO, dtoToCustomerUser } from "../data-access/data-transfer-objects/customer-user.dto";
import { ObjectID } from "bson";
import { ProjectDTO, dtoToProjectArray } from "../data-access/data-transfer-objects/project.dto";

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
    },
    async getClientById(dataToSearch: any): Promise<Client> {
        let client: Client = null;
        await validID(dataToSearch.id);
        await validID(dataToSearch.token);

        if (await userBelongsToCompany(dataToSearch)) {
            const queryClient = { '_id': new ObjectID(dataToSearch.id) };
            const clientDTO: ClientDTO = await repository.clients.get(queryClient);
            client = dtoToClient(clientDTO);
        }

        if (client == null) {
            const reason: RejectReason = { message: "Client not found.", statusCode: 404 };
            throw (reason);
        }
        return client;
    },
    async updateClient(dataToSearch: any, client: Client): Promise<Client> {
        let clientUpdated: Client = null;
        await validID(dataToSearch.id);
        await validID(dataToSearch.token);
        await validClient(client);

        if (await userBelongsToCompany(dataToSearch)) {
            const clientDTO: ClientDTO = clientToDTO(client);
            clientDTO._id = new ObjectID(clientDTO._id);
            clientDTO.entryDate = new Date(clientDTO.entryDate);
            const clientDTOUpdated: ClientDTO = await repository.clients.modify(clientDTO);
            clientUpdated = dtoToClient(clientDTOUpdated);
        }

        if (clientUpdated == null) {
            const reason: RejectReason = { message: "Client not found.", statusCode: 404 };
            throw (reason);
        }
        return clientUpdated;
    },
    async getClientProjects(dataToSearch: any): Promise<Project[]> {
        let projects: Project[] = null;
        await validID(dataToSearch.id);
        await validID(dataToSearch.token);

        if (await userBelongsToCompany(dataToSearch)) {
            const query = { 'id_client': new ObjectID(dataToSearch.id) };
            const projectDTOs: ProjectDTO[] = await repository.projects.get(query);
            projects = dtoToProjectArray(projectDTOs);
        }

        if (projects == null) {
            const reason: RejectReason = { message: "Client not found.", statusCode: 404 };
            throw (reason);
        }
        return projects;
    }
}

async function userBelongsToCompany(dataToSearch: any): Promise<boolean> {
    const queryUser = { 'token': new ObjectID(dataToSearch.token) };
    const userDTO: CustomerUserDTO = await repository.customerUsers.get(queryUser);

    if (userDTO != null && userDTO.id_client == dataToSearch.id) {
        return true;
    }
    return false;
}
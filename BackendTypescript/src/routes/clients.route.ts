import { Router } from "express";
import requireEnterpriseAuth from "../services/require-enterprise-auth.service";
import clientController from "../controllers/clients.controller";
import rutValidateController from "../controllers/rut-validate.controller";
import Client from "../models/client.model";
import User from "../models/customer-user.model";
import Project from "../models/project.model";
import { ProjectDTO, dtoToProjectArray } from "../data-access/data-transfer-objects/project.dto";

function extractClientFromRequest(request): Client {
    const client: Client = {
        companyName: request.body["company_name"],
        entryDate: new Date(request.body["entry_date"])
    }
    return client;
}

function extractClientUserFromRequest(request): User {
    const user: User = {
        id_client: request.body["id_client"],
        username: request.body["user_name"],
        password: request.body["password"]
    }
    return user;
}

function extractClientDataToSearch(request): any {
    const dataToSearch: any = {
        id: request.params.id,
        token: request.headers.authorization
    };
    return dataToSearch;
}

function extractClientDataToUpdate(dataToSearch, request): Client {
    const clientNewData: Client = {
        _id: dataToSearch.id,
        companyName: request.body.companyName,
        rut: request.body.rut,
        entryDate: request.body.entryDate
    };
    return clientNewData;
}

export default (router: Router) => {
    router.post("/register/client", async (request, response) => {
        try {
            await requireEnterpriseAuth(request);
            const clientUser: User = extractClientUserFromRequest(request);
            const addedUser = await clientController.createClientUser(clientUser);

            response.status(201).send(addedUser);
        }
        catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
    router.post("/clients", async (request, response) => {
        try {
            await requireEnterpriseAuth(request)
            const client: Client = extractClientFromRequest(request);

            const createdClient = await clientController.createClient(client)
            response.status(201).send(createdClient);
        }
        catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
    router.get("/clients", async (request, response) => {
        try {
            await requireEnterpriseAuth(request);
            const clients = await clientController.getAllClients();
            response.send(clients);
        }
        catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
    router.get('/clients/:id', async (request, response) => {
        try {
            const dataToSearch: any = extractClientDataToSearch(request);
            const client = await clientController.getClientById(dataToSearch);
            response.send(client);
        } catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
    router.put('/clients/:id', async (request, response) => {
        try {
            const dataToSearch: any = extractClientDataToSearch(request);
            const clientNewData: Client = extractClientDataToUpdate(dataToSearch, request);

            const rutIsValid: boolean = await rutValidateController.validate(clientNewData.rut, dataToSearch.token);
            if (rutIsValid) {
                const client = await clientController.updateClient(dataToSearch, clientNewData);
                response.send(client);
            } else {
                response.status(401).send('Validation RUT API: request rejected.');
            }
        } catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
    router.get('/clients/:id/projects', async (request, response) => {
        try {
            const dataToSearch: any = extractClientDataToSearch(request);
            const projects: Project[] = await clientController.getClientProjects(dataToSearch);
            response.send(projects);
        } catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
}
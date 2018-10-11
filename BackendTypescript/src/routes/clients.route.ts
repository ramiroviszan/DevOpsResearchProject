import { Router } from "express";
import requireEnterpriseAuth from "../services/require-enterprise-auth.service";
import clientController from "../controllers/clients.controller";
import Client from "../models/client.model";
import User from "../models/customer-user.model";

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
}
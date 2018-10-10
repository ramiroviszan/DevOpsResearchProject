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
    router.post("/register/client", (request, response) => {
        requireEnterpriseAuth(request)
            .then(() => {
                const clientUser: User = extractClientUserFromRequest(request);
                clientController.createClientUser(clientUser)
                    .then(addedUser => {
                        response.status(201).send(addedUser);
                    })
                    .catch(reason => {
                        response.status(reason.statusCode).send(reason.message);
                    });
            })
    });
    router.post("/clients", (request, response) => {
        requireEnterpriseAuth(request)
            .then(() => {
                const client: Client = extractClientFromRequest(request);
                clientController.createClient(client)
                    .then(createdClient => {
                        response.status(201).send(createdClient);
                    })
                    .catch(reason => {
                        response.status(reason.statusCode).send(reason.message);
                    });
            })
            .catch(reason => {
                response.status(reason.statusCode).send(reason.message);
            });
    });
    router.get("/clients", (request, response) => {
        requireEnterpriseAuth(request)
            .then(() => {
                clientController.getAllClients()
                    .then(clients => {
                        response.send(clients);
                    })
                    .catch(reason => {
                        response.status(reason.statusCode).send(reason.message);
                    });
            })
            .catch(reason => {
                response.status(reason.statusCode).send(reason.message);
            });
    });
}
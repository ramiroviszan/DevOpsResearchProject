import { Router } from "express";
import requireEnterpriseAuth from "../services/require-enterprise-auth.service";
import clientController from "../controllers/client.controller";
import Client from "../models/client.model";

export default (router: Router) => {
    router.post("/clients", (request, response) => {
        requireEnterpriseAuth(request)
            .then(enterpriseUser => {
                const client: Client = {
                    companyName: request.body["company_name"],
                    entryDate: new Date(request.body["entry_date"])
                }
                clientController.createClient(client)
                    .then(createdClient => {
                        response.send(createdClient);
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
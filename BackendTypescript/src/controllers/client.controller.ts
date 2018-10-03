import Client from "../models/client.model";
import repository from "../data-access/repository-chooser.dataaccess";

export default {
    createClient(client: Client): Promise<Client> {
        return new Promise((resolve, reject) => {
            repository.clients.add(client)
                .then(addedClient => {
                    resolve(addedClient);
                })
                .catch(reason => {
                    reject(reason);
                });
        });
    }
}
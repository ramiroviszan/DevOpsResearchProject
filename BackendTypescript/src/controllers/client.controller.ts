import Client from "../models/client.model";

export default {
    createClient(client: Client): Promise<Client> {
        return new Promise((resolve, reject) => {
            resolve(client);
        });
    }
}
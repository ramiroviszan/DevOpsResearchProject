import { ClientsRepository } from "../interfaces/repository.dataaccess";
import ClientDTO from "./data-transfer-objects/client.dto";

export default class MongoClientsRepository implements ClientsRepository {
    add(client: ClientDTO): Promise<ClientDTO> {
        throw new Error();
    }
    modify(client: ClientDTO): Promise<ClientDTO> {
        throw new Error();
    }
    remove(client: ClientDTO): Promise<any> {
        throw new Error();
    }
}
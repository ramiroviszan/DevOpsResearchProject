import Client from "../../models/client.model";

export default interface ClientsRepository {
    add(client: Client): Promise<Client>;
    modify(client: Client): Promise<Client>;
    remove(client: Client): Promise<any>;
    getAll(): Promise<Client[]>;
}
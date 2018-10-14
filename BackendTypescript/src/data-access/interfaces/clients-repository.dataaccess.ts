import { ClientDTO } from "../data-transfer-objects/client.dto";

export default interface ClientsRepository {
    add(client: ClientDTO): Promise<ClientDTO>;
    modify(client: ClientDTO): Promise<any>;
    remove(client: ClientDTO): Promise<any>;
    get(filter: any): Promise<ClientDTO>;
    getAll(): Promise<ClientDTO[]>;
}
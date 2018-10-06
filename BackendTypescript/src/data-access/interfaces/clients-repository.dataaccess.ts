import { ClientDTO } from "../data-transfer-objects/client.dto";

export default interface ClientsRepository {
    add(client: ClientDTO): Promise<ClientDTO>;
    modify(client: ClientDTO): Promise<ClientDTO>;
    remove(client: ClientDTO): Promise<any>;
    getAll(): Promise<ClientDTO[]>;
}
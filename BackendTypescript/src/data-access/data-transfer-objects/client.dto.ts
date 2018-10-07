import { ObjectID } from "bson";
import Client from "../../../src/models/client.model";

interface ClientDTO {
    _id: ObjectID;
    companyName: string;
    entryDate: Date;
    rut?: string;
}

function dtoToClient(clientDTO: ClientDTO): Client {
    const client: Client = {
        companyName: clientDTO.companyName,
        entryDate: clientDTO.entryDate,
        rut: clientDTO.rut
    }
    return client;
}

function clientToDTO(client: Client): ClientDTO {
    const clientDTO: ClientDTO = {
        _id: new ObjectID(),
        companyName: client.companyName,
        entryDate: client.entryDate,
        rut: client.rut
    }
    return clientDTO;
}

function dtoToClientArray(clientDTOs: ClientDTO[]): Client[] {
    let clients: Client[] = [];
    clientDTOs.forEach(clientDTO => {
        clients.push(dtoToClient(clientDTO));
    });
    return clients;
}

export {
    ClientDTO,
    dtoToClient,
    clientToDTO,
    dtoToClientArray
}
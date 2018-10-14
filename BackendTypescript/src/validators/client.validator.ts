import Client from "../models/client.model";

export default async (client: Client): Promise<Client> => {
    const statusCode: number = 400;

    if (!client) throw { statusCode, message: "Invalid empty client" };
    if (!(client.companyName)) throw { statusCode, message: "Invalid empty company name" };
    if (!(client.entryDate)) throw { statusCode, message: "Invalid empty entry date" };

    return client;
}
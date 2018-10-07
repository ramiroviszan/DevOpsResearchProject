import Client from "../models/client.model";

export default (client: Client): boolean => {
    let isValid: boolean = true;

    if (!client) isValid = false;
    if (!(client.companyName)) isValid = false;
    if (!(client.entryDate)) isValid = false;

    return isValid;
}
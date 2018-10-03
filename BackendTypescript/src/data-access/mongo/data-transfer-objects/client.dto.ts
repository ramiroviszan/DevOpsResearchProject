import { ObjectID } from "bson";
import Client from "../../../models/client.model";

export default interface ClientDTO {
    _id: ObjectID;
    companyName: string;
    entryDate: Date;
    rut?: string;
}
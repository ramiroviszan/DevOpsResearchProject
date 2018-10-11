import { ObjectID } from "bson";

export default interface Client {
    _id?: ObjectID;
    companyName: string;
    entryDate: Date;
    rut?: string;
}
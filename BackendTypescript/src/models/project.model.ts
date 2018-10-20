import { ObjectID } from "bson";

export default interface Project {
    _id?: ObjectID;
    name: string;
    startDate: Date;
    endDate: Date;
    company: string;
    clientID?: ObjectID;
}
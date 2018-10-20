import { ObjectID } from "bson";

export default interface Project {
    name: string;
    startDate: Date;
    endDate: Date;
    company: string;
    clientID?: ObjectID;
}
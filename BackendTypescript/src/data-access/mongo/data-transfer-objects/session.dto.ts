import { ObjectID } from "bson";

export default class CredentialsDTO {
    _id: ObjectID;
    username: string;
    password: string;
    token: string;
}
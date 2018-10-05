import { ObjectID } from "bson";

export default interface User {
    _id?: ObjectID;
    username: string;
    password?: string;
    id_client?: ObjectID;
    token?: ObjectID;
}
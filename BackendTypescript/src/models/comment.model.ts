import { ObjectID } from "bson";

export default interface Comment {
    _id?: ObjectID;
    text: string;
    id_project?: ObjectID;
}
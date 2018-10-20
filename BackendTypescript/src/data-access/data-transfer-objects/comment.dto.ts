import { ObjectID } from "bson";

interface CommentDTO {
    _id?: ObjectID;
    text: string;
    id_project: ObjectID;
}

export {
    CommentDTO
}
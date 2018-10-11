import { ObjectID } from "bson";


export default async (id: ObjectID): Promise<ObjectID> => {
    const statusCode: number = 400;

    if (!ObjectID.isValid(id)) throw { statusCode, message: "Invalid ID" };

    return id;
}
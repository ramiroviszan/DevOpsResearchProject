import User from "../models/customer-user.model";

export default async (user: User): Promise<User> => {
    const statusCode: number = 400;

    if (!user) throw { statusCode, message: "Invalid empty user" };
    if (!(user.username)) throw { statusCode, message: "Invalid empty user username" };
    if (!(user.password)) throw { statusCode, message: "Invalid empty user password" };
    if (!(user.id_client)) throw { statusCode, message: "Invalid empty user client ID" };

    return user;
}
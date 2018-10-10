import User from "../models/customer-user.model";

export default (user: User): boolean => {
    let isValid: boolean = true;

    if (!user) isValid = false;
    if (!(user.username)) isValid = false;
    if (!(user.password)) isValid = false;

    return isValid;
}
import { ObjectID } from "bson";
import CustomerUser from "../../../src/models/customer-user.model";

interface CustomerUserDTO {
    _id?: ObjectID;
    username: string;
    password?: string;
    id_client?: ObjectID;
    token?: ObjectID;
}

function dtoToCustomerUser(customerUserDTO: CustomerUserDTO): CustomerUser {
    const customer: CustomerUser = {
        _id: customerUserDTO._id,
        username: customerUserDTO.username,
        password: customerUserDTO.password,
        id_client: customerUserDTO.id_client,
        token: customerUserDTO.token
    }
    return customer;
}

function customerToDTO(customer: CustomerUser): CustomerUserDTO {
    const customerDTO: CustomerUserDTO = {
        _id: customer._id,
        username: customer.username,
        password: customer.password,
        id_client: customer.id_client,
        token: customer.token
    }
    return customerDTO;
}

export {
    CustomerUserDTO,
    dtoToCustomerUser,
    customerToDTO
}
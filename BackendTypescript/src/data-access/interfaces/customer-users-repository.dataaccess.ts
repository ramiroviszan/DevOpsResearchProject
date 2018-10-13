import { CustomerUserDTO } from "../data-transfer-objects/customer-user.dto";

export default interface CustomerUsersRepository {
    add(customerUserDTO: CustomerUserDTO): Promise<CustomerUserDTO>;
    get(username, password): Promise<CustomerUserDTO>;
    modify(user: CustomerUserDTO): Promise<CustomerUserDTO>;
    clear(token: string): Promise<CustomerUserDTO>;
}
import { CustomerUserDTO } from "../data-transfer-objects/customer-user.dto";

export default interface CustomerUsersRepository {
    get(username, password): Promise<CustomerUserDTO>
}
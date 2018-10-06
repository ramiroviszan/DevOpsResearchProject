import config from "../config";
import CustomerUser from "../models/customer-user.model";
import RejectReason from "../models/reject-reason.model";
import repository from "../data-access/repository-chooser.dataaccess";
import { CustomerUserDTO, customerToDTO, dtoToCustomerUser } from "../data-access/data-transfer-objects/customer-user.dto";

export default {
    processLogin(username: string, password: string): Promise<CustomerUser> {
        return new Promise((resolve, reject) => {
            const reason: RejectReason = {
                statusCode: 404,
                message: 'Not user or password not provided'
            };
            if ((!username) || (!password))
                reject(reason)

            repository.customerUsers.get(username, password)
                .then(customerUser => {
                    resolve(customerToDTO(customerUser));
                })
                .catch(reason => {
                    reject(reason);
                });

        });
    }
};
import CustomerUser from "../models/customer-user.model";
import repository from "../data-access/repository-chooser.dataaccess";
import { dtoToCustomerUser } from "../data-access/data-transfer-objects/customer-user.dto";
import RejectReason from "../models/reject-reason.model";
import { ObjectID } from "bson";

export default {
    processLogin(username: string, password: string): Promise<CustomerUser> {
        var getMethod = function() {
            var promise = new Promise<CustomerUser>(function(resolve, reject) {
                if ((!username) || (!password)) {
                    const reason: RejectReason = {
                        statusCode: 404,
                        message: "Not user or password not provided"
                    };
                    reject(reason);
                }
                repository.customerUsers.get(username, password)
                    .then(theUserDTO => {
                        console.log("[CONTROLLER] Then Get");
                        console.log("[CONTROLLER] " + theUserDTO);
                        if (theUserDTO != null) {
                            resolve(theUserDTO);
                        } else {
                            const reason: RejectReason = {
                                statusCode: 404,
                                message: "Resource not found"
                            };
                            reject(reason);
                        }
                    })
                    .catch(reason => {
                        console.log("[CONTROLLER] Catch Get");
                        reject(reason);
                    });
            });
            return promise;
        };
        var modifyMethod = function(theUserDTO) {
            var promise = new Promise<CustomerUser>(function(resolve, reject) {
                theUserDTO.token = new ObjectID();
                repository.customerUsers.modify(theUserDTO)
                    .then(customerUserUpdatedDTO => {
                        console.log("[CONTROLLER] Then Modify");
                        const customerUserUpdated: CustomerUser = dtoToCustomerUser(customerUserUpdatedDTO);
                        resolve(customerUserUpdated);
                    })
                    .catch(reason => {
                        console.log("[CONTROLLER] Catch Modify");
                        reject(reason);
                    });
            });
            return promise;
        };
        return getMethod()
            .then(modifyMethod)
    }
};
import CustomerUser from "../src/models/customer-user.model";
import * as loginController from '../src/controllers/customer-auth.controller';  
import repository from "../src/data-access/repository-chooser.dataaccess";
import { ObjectID } from "bson";
import RejectReason from "../src/models/reject-reason.model";

jest.mock("../src/data-access/repository-chooser.dataaccess");

var customerInMock : CustomerUser;
var rejectInMock : RejectReason;

repository.customerUsers = {
    get: jest.fn((username,password) => {
        return new Promise((resolve, reject) => {
            if((username=='test1')&&(password=='test2'))
                resolve(customerInMock);
            else
                reject(rejectInMock);
        });
    })
}

const testCustomer :CustomerUser = {
    _id: new ObjectID(),
    username: 'test1',
    password: 'test2',
    token: new ObjectID()
}
const reason: RejectReason = {
    statusCode: 404,
    message: 'Not user or password not provided'
};

it('Login with a user and password should be ok', async ()=> {
    customerInMock = testCustomer;
    await expect(loginController.default.processLogin('test1','test2')).resolves.toEqual(customerInMock);
});

it('when Login haven\'t user we should receive error', async ()=> {
    rejectInMock = reason;
    await expect(loginController.default.processLogin(null,'test2')).rejects.toEqual({"message": "Not user or password not provided", "statusCode": 404});
});

it('when Login haven\'t password we should receive error', async ()=> {
    rejectInMock = reason;
    await expect(loginController.default.processLogin('test1',null)).rejects.toEqual({"message": "Not user or password not provided", "statusCode": 404});
});
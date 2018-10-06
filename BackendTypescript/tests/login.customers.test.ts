import { CustomerUserDTO } from "../src/data-access/data-transfer-objects/customer-user.dto";
import * as loginController from '../src/controllers/customer-auth.controller';  
import repository from "../src/data-access/repository-chooser.dataaccess";
import { ObjectID } from "bson";
import RejectReason from "../src/models/reject-reason.model";

jest.mock("../src/data-access/repository-chooser.dataaccess");

var customerInMock : CustomerUserDTO;
var rejectInMock : RejectReason;

repository.customerUsers = {
    get: jest.fn((username,password) => {
        return new Promise((resolve, reject) => {
            if((!username) || (!password)){
                reject(reasonWithoutUserNamePassword);
            }
            if((username=='test1')&&(password=='test2'))
                resolve(customerInMock);
            else
                reject(reasonIncorrectUserNamePassword);
        });
    }),
    modify : jest.fn((testCustomer) => {
        return new Promise((resolve, reject) => {
            testCustomer.token = new ObjectID();
            resolve(testCustomer);
        });
    })
}

const testCustomer :CustomerUserDTO = {
    _id: new ObjectID(),
    username: 'test1',
    password: 'test2',
    token: null
}
const reasonWithoutUserNamePassword: RejectReason = {
    statusCode: 404,
    message: 'Not user or password not provided'
};

const reasonIncorrectUserNamePassword: RejectReason = {
    statusCode: 404,
    message: 'Resource not found'
};

it('Login with a user and password should be ok', async ()=> {
    customerInMock = testCustomer;
    await expect(loginController.default.processLogin('test1','test2')).resolves.toEqual(customerInMock);
});

it('Login with a incorrect user and password should be a response with 404', async ()=> {
    await expect(loginController.default.processLogin('incorrect_user','incorrect_password')).rejects.toEqual({"message": "Resource not found", "statusCode": 404});
});

it('when Login haven\'t user we should receive error', async ()=> {
    rejectInMock = reasonWithoutUserNamePassword;
    await expect(loginController.default.processLogin(null,'test2')).rejects.toEqual({"message": "Not user or password not provided", "statusCode": 404});
});

it('when Login haven\'t password we should receive error', async ()=> {
    rejectInMock = reasonWithoutUserNamePassword;
    await expect(loginController.default.processLogin('test1',null)).rejects.toEqual({"message": "Not user or password not provided", "statusCode": 404});
});
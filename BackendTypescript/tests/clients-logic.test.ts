import clientController from "../src/controllers/clients.controller";
import Client from "../src/models/client.model";
import repository from "../src/data-access/repository-chooser.dataaccess";

jest.mock("../src/data-access/repository-chooser.dataaccess", () => ({
    add: jest.fn(client => {
        return new Promise((resolve, reject) => {
            if(clientsInMock.find(x => x.companyName === client.companyName)) {
                reject();
            }
            clientsInMock.push(client);
            resolve(client);
        });
    }),
    getAll: jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve(clientsInMock);
        });
    })
}));

var clientsInMock : Client[] = [];

const testClient :Client = {
    companyName: "test",
    entryDate: new Date("01/01/2000")
}

beforeEach(() => {
    clientsInMock = [];
});

describe("Create client", () => {
    test("should return the client when adding a valid client",  () => {
        expect(clientController.createClient(testClient)).resolves.toEqual(testClient);
    });
    test("should reject when adding same client twice",  () => {
        clientsInMock.push(testClient);
        
        expect(clientController.createClient(testClient)).rejects.toHaveBeenCalled();
    });
    test("should reject when adding invalid client",  () => {
        expect(clientController.createClient(testClient)).rejects.toHaveBeenCalled();
    });
});

describe("Get all clients", () => {
    it("should return empty when no clients were added",  () => {
        expect(clientController.getAllClients()).resolves.toHaveLength(0);
    });
    it("should return 1 when 1 client was added",  () => {
        clientsInMock.push(testClient);
        expect(clientController.getAllClients()).resolves.toHaveLength(1);
    });
});
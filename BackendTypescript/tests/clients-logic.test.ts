import clientController from "../src/controllers/client.controller";
import Client from "../src/models/client.model";

jest.mock("../src/data-access/interfaces/clients-repository.dataaccess", () => {
    function add(client) {
        return new Promise((resolve, reject) => {
            resolve(client);
        });
    };
    function modify(client) {
        throw new Error();
    }
    function remove(client) {
        throw new Error();
    };
});

describe("Clients controller", () => {
    it("should return the client when adding a valid client",  () => {
        const validClient :Client = {
            companyName: "test",
            entryDate: new Date("01/01/2000")
        }
        clientController.createClient(validClient)
        .then(client => expect(client).toBe(validClient));
    })
});
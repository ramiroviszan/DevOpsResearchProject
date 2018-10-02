import clientController from "../src/controllers/client.controller";
import Client from "../src/models/client.model";

describe("Clients controller", () => {
    it("should return ok when adding a valid client",  () => {
        const validClient :Client = {
            companyName: "test",
            entryDate: new Date("01/01/2000")
        }
        clientController.createClient(validClient)
        .then(client => expect(client).toBe(validClient));
    })
});
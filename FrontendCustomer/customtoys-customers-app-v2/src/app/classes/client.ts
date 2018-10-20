export class Client {
    public _id: string;
    public companyName: string;
    public rut: string;
    public entryDate: string;

    constructor(client:Client){
        this._id=client._id;
        this.companyName=client.companyName;
        this.rut=client.rut;
        this.entryDate=client.entryDate;
    }
  }
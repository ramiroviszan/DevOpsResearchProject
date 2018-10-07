export class Client {
    public _id: string;
    public company_name: string;
    public rut: string;
    public entry_date: string;

    constructor(client:Client){
        this._id=client._id;
        this.company_name=client.company_name;
        this.rut=client.rut;
        this.entry_date=client.entry_date;
    }
  }
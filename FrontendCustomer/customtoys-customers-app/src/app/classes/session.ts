import {User} from "./user";
import {Client} from "./client";

export class Session {
  public user: User;
  public client: Client;

  constructor(user:User){
    this.user=user;
  }

  public setClient(client:Client) {
    this.client = client;
  }

  public getClient():Client {
    return this.client;
  }
}
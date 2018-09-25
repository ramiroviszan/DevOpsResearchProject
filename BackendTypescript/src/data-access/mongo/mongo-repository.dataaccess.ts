import IRepository, { ISessionDataAccess } from "../irepository.dataaccess";
import SessionDataAccess from "./session.dataaccess";

class MongoRepository implements IRepository {
    SessionDataAccess: ISessionDataAccess = SessionDataAccess;
}

export default new MongoRepository();
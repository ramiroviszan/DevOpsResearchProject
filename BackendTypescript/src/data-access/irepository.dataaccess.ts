import { ISessionDataAccess } from "./isession.dataaccess";

interface IRepository {
    SessionDataAccess: ISessionDataAccess
}

export default IRepository;

export {
    ISessionDataAccess
}
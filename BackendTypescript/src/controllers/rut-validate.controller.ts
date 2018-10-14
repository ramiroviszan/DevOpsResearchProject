import config from "../config";
import * as request from "request-promise-native";
import * as jwt from "jsonwebtoken";
import EnterpriseUser from "../models/enterprise-user.mode";
import RejectReason from "../models/reject-reason.model";

export default {
    validate: async function(rut: string, token: string): Promise<boolean> {
        const options: request.RequestPromiseOptions = {
            headers: {
                 "Authorization": config.ENTERPRISE_AUTH_API_TOKEN
            },
            body: {
                "rut": rut
            },
            json: true
        };
        try {
            await request.post(config.CUSTOMER_RUT_VALIDATE_API_URL, options);
            return true;
        }
        catch (reason) {
            return false;
        }
    }
};
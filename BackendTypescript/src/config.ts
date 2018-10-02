const DB_DEV_URL: string = "mongodb://customtoys:password@ds263832.mlab.com:63832/customtoys-dev-db";
const DB_PROD_URL: string = "mongodb://customtoys:password@ds163842.mlab.com:63842/customtoys-prod-db";

export default {
    DB_URL: DB_DEV_URL,

    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || "7eb74c33-140d-4083-8809-e5e6a0eac1e4",
    HASH_SALT: process.env.HASH_SALT || "1b2b322c-c268-4e30-b661-2ae4bbe3a0ed",
    ENTERPRISE_AUTH_API_TOKEN: "d774f026-6243-4a14-9696-051329f82987",
    ENTERPRISE_AUTH_API_URL: 'https://dev-ops-ort.herokuapp.com/api/auth/token',
    CUSTOMER_RUT_VALIDATE_API_URL: 'https://dev-ops-ort.herokuapp.com/api/rut/validate'
}
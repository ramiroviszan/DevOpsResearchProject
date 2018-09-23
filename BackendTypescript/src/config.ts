export default {
    DB_URL: 'mongodb://admin:passw0rd@ds161062.mlab.com:61062/devops',
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || "7eb74c33-140d-4083-8809-e5e6a0eac1e4",
    HASH_SALT: process.env.HASH_SALT || "1b2b322c-c268-4e30-b661-2ae4bbe3a0ed",
    COMPANY_LOGIN_API_URL: 'https://dev-ops-ort.herokuapp.com/api/auth/token',
    CUSTOMER_RUT_VALIDATE_API_URL: 'https://dev-ops-ort.herokuapp.com/api/rut/validate'
}
module.exports = {
    //DB_URL: 'mongodb://igorcardozo:igoradmin123@ds153552.mlab.com:53552/customtoys',
    //DB_URL: 'mongodb://test:password2018@ds251622.mlab.com:51622/mongo_test',
    DB_URL: 'mongodb://admin:passw0rd@ds161062.mlab.com:61062/devops',
    PORT: process.env.PORT || 3000,
    COMPANY_LOGIN_API_URL: 'https://dev-ops-ort.herokuapp.com/api/auth/token',
    CUSTOMER_RUT_VALIDATE_API_URL: 'https://dev-ops-ort.herokuapp.com/api/rut/validate'
}
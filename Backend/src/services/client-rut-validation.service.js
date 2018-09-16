const apiRequest = require('request');
const { CUSTOMER_RUT_VALIDATE_API_URL } = require('../config');

function validateRUT(rutToValidate, cb){
    apiRequest.post(CUSTOMER_RUT_VALIDATE_API_URL,
        {
            json: {
                rut: rutToValidate
            }
        },
        (apiError, apiResponse, apiBody) => {
            if (!apiError) {
                console.log(`External Validation RUT API responded: ${apiResponse && apiResponse.statusCode}`);
                cb(apiError, apiResponse.statusCode);
            }
            else {
                console.error(apiError);
                cb(apiError, apiResponse.statusCode);
            }
        });
}

module.exports.validateRUT = validateRUT;
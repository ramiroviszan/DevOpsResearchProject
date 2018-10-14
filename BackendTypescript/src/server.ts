import app from "./app";
import config from "./config";
import * as express from 'express';
import * as path from 'path';

const fronend_customers = '../../FrontendCustomer/customtoys-customers-app-v2/dist';
const fronend_company = '../../FrontendBusiness/customtoys-company-app/dist';

console.log("--------------------------------------------------------------");
console.log("Ruta al frontend customer");
console.log(path.join(__dirname, fronend_customers));
console.log("--------------------------------------------------------------");

console.log("--------------------------------------------------------------");
console.log("Ruta al frontend company");
console.log(path.join(__dirname, fronend_company));
console.log("--------------------------------------------------------------");

app.use('/front/*',express.static(path.join(__dirname, fronend_customers)));
app.use('/front',express.static(path.join(__dirname, fronend_customers)));
app.use('/',express.static(path.join(__dirname, fronend_customers)));

app.use('/company/*',express.static(path.join(__dirname, fronend_company)));
app.use('/company',express.static(path.join(__dirname, fronend_company)));

app.listen(config.PORT, () => {
    console.log('Server listening on port: ' + config.PORT);
});
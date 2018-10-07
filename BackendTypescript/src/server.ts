import app from "./app";
import config from "./config";
import * as express from 'express';
import * as path from 'path';

const fronend = '../../FrontendCustomer/customtoys-customers-app-v2/dist';

console.log("--------------------------------------------------------------");
console.log("Ruta al frontend customer");
console.log(path.join(__dirname, fronend));
console.log("--------------------------------------------------------------");

app.use('/front/*',express.static(path.join(__dirname, fronend)));
app.use('/front',express.static(path.join(__dirname, fronend)));
app.use('/',express.static(path.join(__dirname, fronend)));

app.listen(config.PORT, () => {
    console.log('Server listening on port: ' + config.PORT);
});
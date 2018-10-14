import { Application } from "express";
import * as morgan from "morgan";
import * as fs from "fs";
import * as path from "path";

var errorsLogStream = fs.createWriteStream(path.join(__dirname, '../../logs/errors.log'), { flags: 'a' })
var callsLogStream = fs.createWriteStream(path.join(__dirname, '../../logs/calls.log'), { flags: 'a' })

const errorLogger = morgan("tiny", {
    skip: (request, response) => {
        return response.statusCode < 400
    },
    stream: errorsLogStream
});
const callLogger = morgan("tiny", {
    stream: callsLogStream
});

export default (app: Application) => {
    app.use(errorLogger);
    app.use(callLogger);
}
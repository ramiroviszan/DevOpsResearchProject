import bodyParser from "./body-parser.middleware";
import telemetry from "./telemetry.middleware";
import { Application } from "express";

export default (app: Application) => {
    bodyParser(app);
    telemetry(app);
}
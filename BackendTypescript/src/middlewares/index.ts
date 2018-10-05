import bodyParser from "./body-parser.middleware";
import { Application } from "express";

export default (app: Application) => {
    bodyParser(app);
}
import * as express from "express";
import useMiddlewares from "./middlewares";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        useMiddlewares(this.app);
    }
}

export default new App().app;
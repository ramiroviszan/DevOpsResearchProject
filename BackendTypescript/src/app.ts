import * as express from "express";
import useMiddlewares from "./middlewares";
import api from "./api";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        useMiddlewares(this.app);
        api(this.app);
    }
}

export default new App().app;
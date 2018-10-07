import * as express from "express";
import useMiddlewares from "./middlewares";
import api from "./api";
import * as cors from "cors";

const corsOptions : cors.CorsOptions = {
    allowedHeaders: ["Authorization"]
}

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(cors(corsOptions));
        useMiddlewares(this.app);
        api(this.app);
    }
}

export default new App().app;
import { Router, Application } from "express";
import useRoutes from "../routes";

const router: Router = Router();

export default (app: Application) => {
    useRoutes(router);
    app.use('/api', router);
}
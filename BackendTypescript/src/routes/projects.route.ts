import { Router, Request, Response } from "express";
import requireEnterpriseAuth from "../services/require-enterprise-auth.service";
import Project from "../models/project.model";
import projectsController from "../controllers/projects.controller";

export default (router: Router) => {
    router.post("/projects", (request: Request, response: Response) => {
        requireEnterpriseAuth(request)
            .then(() => {
                const project: Project = {
                    name: request.body["name"],
                    startDate: request.body["start-date"],
                    endDate: request.body["end-date"],
                    company: request.body["company"]
                };
                projectsController.createProject(project)
                    .then(createdProject => {
                        response.status(201).send(createdProject);
                    })
                    .catch(reason => {
                        response.status(reason.statusCode).send(reason.message);
                    });
            })
            .catch(reason => {
                response.status(reason.statusCode).send(reason.message);
            });
    });
    router.get("/projects", (request, response) => {
        requireEnterpriseAuth(request)
            .then(() => {
                projectsController.getAllProjects()
                    .then(projects => {
                        response.send(projects);
                    })
                    .catch(reason => {
                        response.status(reason.statusCode).send(reason.message);
                    });
            })
            .catch(reason => {
                response.status(reason.statusCode).send(reason.message);
            });
    });
};
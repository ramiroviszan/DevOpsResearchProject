import { Router, Request, Response } from "express";
import requireEnterpriseAuth from "../services/require-enterprise-auth.service";
import Project from "../models/project.model";
import projectsController from "../controllers/projects.controller";

function extractProjectDataToSearch(request): any {
    const dataToSearch: any = {
        id: request.params.id,
        token: request.headers.authorization
    };
    return dataToSearch;
}

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
    router.get('/projects/:id/comments', async (request, response) => {
        try {
            const dataToSearch: any = extractProjectDataToSearch(request);
            const comments: Comment[] = await projectsController.getProjectComments(dataToSearch);
            response.send(comments);
        } catch (reason) {
            response.status(reason.statusCode).send(reason.message);
        }
    });
};
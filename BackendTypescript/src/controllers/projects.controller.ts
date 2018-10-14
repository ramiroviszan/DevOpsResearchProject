import Project from "../models/project.model";
import RejectReason from "../models/reject-reason.model";
import { ProjectDTO, projectToDTO, dtoToProject, dtoToProjectArray } from "../data-access/data-transfer-objects/project.dto";
import User from "../models/customer-user.model";
import Comment from "../models/comment.model";
import repository from "../data-access/repository-chooser.dataaccess";
import validProject from "../validators/project.validator";
import clientsController from "./clients.controller";
import validID from "../validators/object-id.validator";
import { ObjectID } from "bson";

export default {
    createProject(project: Project): Promise<Project> {
        return new Promise((resolve, reject) => {
            if (!validProject(project)) {
                const reason: RejectReason = {
                    message: "Invalid project",
                    statusCode: 400
                }
                reject(reason);
            }

            clientsController.getClient(project.company)
                .then(client => {
                    project.clientID = client._id;
                    const projectDTO: ProjectDTO = projectToDTO(project);
                    repository.projects.add(projectDTO)
                        .then(addedProjectDTO => {
                            const addedproject: Project = dtoToProject(addedProjectDTO);
                            resolve(addedproject);
                        })
                        .catch(reason => {
                            reject(reason);
                        });
                })
                .catch(() => {
                    const reason: RejectReason = {
                        message: "Invalid company",
                        statusCode: 400
                    }
                    reject(reason);
                });
        });
    },
    getAllProjects(): Promise<Project[]> {
        return new Promise((resolve, reject) => {
            repository.projects.getAll()
                .then(projectDTOs => {
                    const projects: Project[] = dtoToProjectArray(projectDTOs);
                    resolve(projects);
                })
                .catch(reason => {
                    reject(reason);
                });
        });
    },  
    async getProjectComments(dataToSearch: any): Promise<Comment[]> {
        let comments: Comment[] = null;
        await validID(dataToSearch.id);
        await validID(dataToSearch.token);

        if (await userAndProjectBelongsToCompany(dataToSearch)) {
            const query = { 'id_project': new ObjectID(dataToSearch.id) };
            comments = await repository.projects.getComments(query);
        }

        if (comments == null) {
            const reason: RejectReason = { message: "Project not found.", statusCode: 404 };
            throw (reason);
        }
        return comments;
    },
    async createProjectComment(dataToSearch: any, newComment: any): Promise<Comment> {
        let comment: Comment = null;
        await validID(dataToSearch.id);
        await validID(dataToSearch.token);

        if (await userAndProjectBelongsToCompany(dataToSearch)) {
            comment = await repository.projects.addComment(newComment);
        }
        if (comment == null) {
            const reason: RejectReason = { message: "Project not found.", statusCode: 404 };
            throw (reason);
        }

        return comment;
    }
}

async function userAndProjectBelongsToCompany(dataToSearch: any): Promise<boolean> {
    const queryProject = { '_id': new ObjectID(dataToSearch.id) };
    const projectDTO: ProjectDTO[] = await repository.projects.get(queryProject);

    const queryUser = { 'token': new ObjectID(dataToSearch.token) };
    const user: User = await repository.customerUsers.get(queryUser);

    if (projectDTO[0] && user && projectDTO[0].id_client == user.id_client &&
        projectDTO[0]._id == dataToSearch.id &&
        user.token == dataToSearch.token) {
        return true;
    }
    return false;
}
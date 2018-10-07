import Project from "../models/project.model";
import RejectReason from "../models/reject-reason.model";
import { ProjectDTO, projectToDTO, dtoToProject, dtoToProjectArray } from "../data-access/data-transfer-objects/project.dto";
import repository from "../data-access/repository-chooser.dataaccess";
import validProject from "../validators/project.validator";
import clientsController from "./clients.controller";

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
                .then(() => {
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
    }
}
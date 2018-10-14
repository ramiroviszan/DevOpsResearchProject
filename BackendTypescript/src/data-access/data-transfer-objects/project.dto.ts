import { ObjectID } from "bson";
import Project from "../../models/project.model";

interface ProjectDTO {
    _id: ObjectID;
    name: string;
    startDate: Date;
    endDate: Date;
    company: string;
}

function dtoToProject(projectDTO: ProjectDTO): Project {
    const project: Project = {
        name: projectDTO.name,
        startDate: projectDTO.startDate,
        endDate: projectDTO.endDate,
        company: projectDTO.company
    }
    return project;
}

function projectToDTO(project: Project): ProjectDTO {
    const projectDTO: ProjectDTO = {
        _id: new ObjectID(),
        name: project.name,
        startDate: project.startDate,
        endDate: project.endDate,
        company: project.company
    }
    return projectDTO;
}

function dtoToProjectArray(projectDTOs: ProjectDTO[]): Project[] {
    let projects: Project[] = [];
    projectDTOs.forEach(projectDTO => {
        projects.push(dtoToProject(projectDTO));
    });
    return projects;
}

export {
    ProjectDTO,
    dtoToProject,
    projectToDTO,
    dtoToProjectArray
}
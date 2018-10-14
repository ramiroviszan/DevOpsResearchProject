import { ProjectDTO } from "../data-transfer-objects/project.dto";

export default interface ProjectsRepository {
    add(project: ProjectDTO): Promise<ProjectDTO>;
    modify(project: ProjectDTO): Promise<ProjectDTO>;
    remove(project: ProjectDTO): Promise<any>;
    getAll(): Promise<ProjectDTO[]>;
    get(filter: any): Promise<ProjectDTO[]>;
    getComments(filter: any): Promise<Comment[]>;
    addComment(comment: Comment): Promise<Comment>;
}
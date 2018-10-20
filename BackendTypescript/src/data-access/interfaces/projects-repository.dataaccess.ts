import { ProjectDTO } from "../data-transfer-objects/project.dto";
import { CommentDTO } from "../data-transfer-objects/comment.dto";

export default interface ProjectsRepository {
    add(project: ProjectDTO): Promise<ProjectDTO>;
    modify(project: ProjectDTO): Promise<ProjectDTO>;
    remove(project: ProjectDTO): Promise<any>;
    getAll(): Promise<ProjectDTO[]>;
    get(filter: any): Promise<ProjectDTO[]>;
    getComments(filter: any): Promise<CommentDTO[]>;
    addComment(comment: any): Promise<CommentDTO>;
}
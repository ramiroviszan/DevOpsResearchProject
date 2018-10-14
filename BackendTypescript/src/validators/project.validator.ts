import Project from "../models/project.model";

export default (project: Project): boolean => {
    let isValid: boolean = true;

    if (!project) isValid = false;
    if (!(project.name)) isValid = false;
    if (!(project.startDate)) isValid = false;
    if (!(project.endDate)) isValid = false;

    return isValid;
}
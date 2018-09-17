const projectDA = require('../data-access/project-da');

function getAllProjects(callback) {
    projectDA.getAllProjects((error, projects) => {
        return callback(error, projects);
    });
}

function addProject(newProject, callback) {
    projectDA.createProject(newProject, (error, createdProject) => {
        return callback(error, createdProject);
    });
}

function getProjectComments(dataToSearch, cb){
    userAndProjectBelongsToCompany(dataToSearch, (result) => {
        if (result == true) {
            projectDA.getProjectComments(dataToSearch.id, (err, comments) => {
                return cb(err, comments);
            });
        } else {
            return cb('', null);
        }
    });
}

function saveProjectComments(dataToSearch, newComment, cb){
    userAndProjectBelongsToCompany(dataToSearch, (result) => {
        if (result == true) {
            projectDA.saveProjectComments(newComment, (err, comment) => {
                return cb(err, comment);
            });
        } else {
            return cb('', null);
        }
    });
}

function userAndProjectBelongsToCompany(dataToSearch, cb){
    projectDA.getProject(dataToSearch.id, (err, project)=>{
        if (!err && project){
            projectDA.getUser(dataToSearch.token, (error, user) =>{
                if(!error && user){
                    if(project.id_client == user.id_client && 
                       project._id == dataToSearch.id &&
                       user.token == dataToSearch.token){
                           cb(true);
                       }else{
                           cb(false);
                       }
                }else{
                    cb(false);
                }
            });
        }else{
            cb(false);
        }
    });
};

module.exports = {
    getProjectComments,
    saveProjectComments,
    addProject,
    getAllProjects
};
const projectDA = require('../data-access/project-da');

function getProjectComments(dataToSearch, cb){
    //clientDA.userBelongsToCompany(dataToSearch, (result) => {
    //    if (result == true) {
            projectDA.getProjectComments(dataToSearch.id, (err, comments) => {
                return cb(err, comments);
            });
    //    } else {
    //        return cb('', null);
    //    }
    //});
}

function saveProjectComments(dataToSearch, newComment, cb){
    //clientDA.userBelongsToCompany(dataToSearch, (result) => {
    //    if (result == true) {
            projectDA.saveProjectComments(newComment, (err, comment) => {
                return cb(err, comment);
            });
    //    } else {
    //        return cb('', null);
    //    }
    //});
}

module.exports.getProjectComments = getProjectComments;
module.exports.saveProjectComments = saveProjectComments;
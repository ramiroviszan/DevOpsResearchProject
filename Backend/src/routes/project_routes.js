const projectLogic = require('../business-logic/project.logic');

module.exports = (app) => {
  app.post('/api/projects', (request, response) => {
    console.log('Call to api/projects');
    response.send('Call to /api/projects');
  });
  
  app.get('/api/Projects/:id/Comments', (req, res) => {
    const dataToSearch = {
      id : req.params.id,
      token : req.headers.token
    };
    
    if (!req.params.id || req.params.id.length != 24){
      res.status(400).send('Id field must be 24 hexadecimal characters long.');
      return;
    } 
    
    projectLogic.getProjectComments(dataToSearch, (err, comments) => {
      if (err || !comments) {
        res.status(404).send('Project not found.');
      } else {
        res.send(comments);
      } 
    });     
  });
  
  app.post('/api/Projects/:id/Comments', (req, res) => {
    const dataToSearch = {
      id : req.params.id,
      token : req.headers.token
    };
    
    const newComment = { 
      text: req.body.text, 
      id_project: req.body.id_project
    };
    
    if (!req.params.id || req.params.id.length != 24){
      res.status(400).send('Id field must be 24 hexadecimal characters long.');
      return;
    } 
    
    projectLogic.saveProjectComments(dataToSearch, newComment, (err, comment) => {
      if (err || !comment) {
        res.status(400).send();
      } else {
        res.send(comment);
      } 
    });     
  });
};
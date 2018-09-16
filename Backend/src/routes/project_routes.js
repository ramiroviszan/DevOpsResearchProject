const projectLogic = require('../business-logic/project.logic');
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.put('/projects/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    
    const project = { 
      name: req.body.name, 
      start_date: req.body.start_date,
      end_date: req.body.end_date
    };
    
    db.collection('projects').update(details, project, (err, result) => {
      if (err) {
        res.send({'error':'Error al modificar proyecto'});
      } else {
        res.send(project);
      } 
    });
  });
  
  app.delete('/projects/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('projects').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al eliminar proyecto'});
      } else {
        res.send('Proyecto ' + id + ' eliminado!');
      } 
    });
  });
  
  app.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('projects').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al obtener proyecto'});
      } else {
        res.send(item);
      } 
    });
  });
  
  
  app.post('/projects', (req, res) => {
    const project = { 
      name: req.body.name, 
      start_date: req.body.start_date,
      end_date: req.body.end_date
    };
    
    db.collection('projects').insert(project, (err, result) => {
      if (err) { 
        res.send({ 'error': 'Error al crear proyecto' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
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
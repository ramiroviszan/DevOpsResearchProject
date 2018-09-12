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
};
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    
    const user = { 
      username: req.body.username, 
      password: req.body.password
    };
    
    db.collection('users').update(details, user, (err, result) => {
      if (err) {
        res.send({'error':'Error al modificar usuario'});
      } else {
        res.send(user);
      } 
    });
  });
  
  app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('users').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al eliminar usuario'});
      } else {
        res.send('Usuario ' + id + ' eliminado!');
      } 
    });
  });
  
  app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('users').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al obtener usuario'});
      } else {
        res.send(item);
      } 
    });
  });
  
  
  app.post('/users', (req, res) => {
    const user = { 
      username: req.body.username, 
      password: req.body.password
    };
    
    db.collection('users').insert(user, (err, result) => {
      if (err) { 
        res.send({ 'error': 'Error al crear usuario' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
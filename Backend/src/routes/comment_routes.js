var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const comment = { text: req.body.text };
    db.collection('comments').update(details, comment, (err, result) => {
      if (err) {
        res.send({'error':'Error al modificar comentario'});
      } else {
        res.send(comment);
      } 
    });
  });
  
  app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('comments').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al eliminar comentario'});
      } else {
        res.send('Comentario ' + id + ' eliminado!');
      } 
    });
  });
  
  app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('comments').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al obtener comentario'});
      } else {
        res.send(item);
      } 
    });
  });
  
  
  app.post('/comments', (req, res) => {
    const comment = { text: req.body.text };
    db.collection('comments').insert(comment, (err, result) => {
      if (err) { 
        res.send({ 'error': 'Error al crear comentario' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
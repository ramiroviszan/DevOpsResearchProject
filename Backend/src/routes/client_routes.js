const clientLogic = require('../business-logic/client.logic');

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.put('/clients/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    
    const client = { 
      username: req.body.username, 
      password: req.body.password,
      company_name: req.body.company_name,
      rut: req.body.rut,
      entry_date: req.body,date 
    };
    
    db.collection('clients').update(details, client, (err, result) => {
      if (err) {
        res.send({'error':'Error al modificar cliente'});
      } else {
        res.send(client);
      } 
    });
  });
  
  app.delete('/clients/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('clients').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al eliminar cliente'});
      } else {
        res.send('Cliente ' + id + ' eliminado!');
      } 
    });
  });
  
  app.get('/clients/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('clients').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'Error al obtener cliente'});
      } else {
        res.send(item);
      } 
    });
  });
  
  
  app.post('/clients', (req, res) => {
    
    const client = { 
      username: req.body.username, 
      password: req.body.password,
      company_name: req.body.company_name,
      rut: req.body.rut,
      entry_date: req.body.entry_date 
    };
    
    db.collection('clients').insert(client, (err, result) => {
      if (err) { 
        res.send({ 'error': 'Error al crear cliente' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });



  app.get('/api/Clients/:id', (req, res) => {
    const id = req.params.id;

    if (!req.params.id || req.params.id.length != 24){
      res.status(400).send('Id field must be 24 hexadecimal characters long.');
      return;
    } 
    
    clientLogic.getClient(id, (err, client) => {
      if (err || !client) {
        res.status(404).send('Client not found.');
      } else {
        res.send(client);
      } 
    });     
  });

  app.put('/api/Clients/:id', (req, res) => {
    const id = req.params.id;

    if (!req.params.id || req.params.id.length != 24){
      res.status(400).send('Id field must be 24 hexadecimal characters long.');
      return;
    } 

    const clientNewData = {
      _id: id,
      company_name: req.body.company_name,
      rut: req.body.rut,
      entry_date: req.body.entry_date
    };

    clientLogic.updateClient(clientNewData, (err, client, status) => {
      if (err) {
        res.status(404).send('Client not found.');
      } else if(!status){
        res.status(200).send(client);
      } else{
        res.status(status).send('Validation RUT API: request rejected.');
      }
    });     
  });



};
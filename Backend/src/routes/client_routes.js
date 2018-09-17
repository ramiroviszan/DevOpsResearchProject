const clientLogic = require('../business-logic/client.logic');

module.exports = function(app) {
  app.post('/api/clients', (request, response) => {
    const newClient = {
      company_name: request.body.company_name,
      entry_date: request.body.entry_date
    }
    
    clientLogic.createClient(newClient, (error, addedClient) => {
      if(error) {
        console.log(error);
        response.status(500).send('Error al crear cliente');
      }
      else {
        response.send(addedClient);
      }
    });
  });

  app.get('/api/Clients/:id', (req, res) => {
    const dataToSearch = {
      id : req.params.id,
      token : req.headers.token
    };

    if (!req.params.id || req.params.id.length != 24){
      res.status(400).send('Id field must be 24 hexadecimal characters long.');
      return;
    } 

    clientLogic.getClient(dataToSearch, (err, client) => {
      if (err || !client) {
        res.status(404).send('Client not found.');
      } else {
        res.send(client);
      } 
    });     
  });

  app.put('/api/Clients/:id', (req, res) => {
    const dataToSearch = {
      id : req.params.id,
      token : req.headers.token
    };

    if (!req.params.id || req.params.id.length != 24){
      res.status(400).send('Id field must be 24 hexadecimal characters long.');
      return;
    } 

    const clientNewData = {
      _id: dataToSearch.id,
      company_name: req.body.company_name,
      rut: req.body.rut,
      entry_date: req.body.entry_date
    };

    clientLogic.updateClient(dataToSearch, clientNewData, (err, client, status) => {
      if (err) {
        res.status(404).send('Client not found.');
      } else if(!status){
        res.status(200).send(client);
      } else{
        res.status(status).send('Validation RUT API: request rejected.');
      }
    });     
  });

  app.get('/api/Clients/:id/Projects', (req, res) => {
    const dataToSearch = {
      id : req.params.id,
      token : req.headers.token
    };

    if (!req.params.id || req.params.id.length != 24){
      res.status(400).send('Id field must be 24 hexadecimal characters long.');
      return;
    } 

    clientLogic.getClientProjects(dataToSearch, (err, projects) => {
      if (err || !projects) {
        res.status(404).send('Client not found.');
      } else {
        res.send(projects);
      } 
    });     
  });
};
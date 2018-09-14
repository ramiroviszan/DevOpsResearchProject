const express = require('express');
const app = express();
const { PORT } = require('../config');

const useMiddlewares = require('../middlewares');
const routes = require('../routes');

//useMiddlewares(app);
routes(app);

app.use((error, request, response, next) => {
    console.log(error);
    response.status(404);
    response.send('404 - Not Found');
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});
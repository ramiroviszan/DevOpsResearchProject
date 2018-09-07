var http = require('http');
var server = http.createServer();

var port = process.env.PORT || 8080;

function control(petic, resp) {
resp.writeHead(200, {'content-type': 'text/plain'});
resp.write('Hola, Mundo!');
resp.end();
}
server.on('request', control);
server.listen(port);

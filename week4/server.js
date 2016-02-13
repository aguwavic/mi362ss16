const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('Hello World\n');
  response.end('This is a node app!'\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
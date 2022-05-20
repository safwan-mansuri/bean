const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, BYe!');
}

const server = http.createServer(requestListener);
server.listen(8080 || process.env.POST);

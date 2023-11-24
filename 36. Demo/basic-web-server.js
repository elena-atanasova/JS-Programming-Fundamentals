const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Web!');
}).listen(8080);
console.log('Listening on port 8080');
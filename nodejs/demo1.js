http = require('http'); listener = function (request, response) {
// Send the HTTP header, HTTP Status: 200 : OK, Content Type: text/html response.writeHead(200, {'Content-Type': 'text/html'});
response.end('Hello World'); // Send the response body as "Hello World"
};
server = http.createServer(listener); server.listen(8081); console.log('Server running at http://127.0.0.1:8081/'); 

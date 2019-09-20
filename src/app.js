const http = require('http'); //http=package
const server = http.createServer(); //server aanmaken en laten luisteren op poort 3000

server.on('request', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello world');
    response.end(); //connectie afsluiten
});

server.listen(3000, () => {
    console.log('Node server created at port 3000');
});
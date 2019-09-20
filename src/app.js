const http = require('http'); //http=package
const server = http.createServer(); //server aanmaken en laten luisteren op poort 3000
const url = require('url');

function set_response(response, content, status = 200) {
    response.writeHead(status, { 'Content-Type': 'text/plain' });
    response.write(content);
}

server.on('request', (request, response) => {
    let path = url.parse(request.url).pathname;//url van request meegeven en parsen en pathname geven (alles achter/)
    console.log(path);

    if (path === '/') {//"": enscape chars herkennen, ==: boolean, ===
        set_response(response, 'Hello World');
    } else if (path === '/about') {
        set_response(response, 'Made by VIVES students. ;)');
    } else {
        set_response(response, 'Error', 400);
    }
    response.end(); //connectie afsluiten
});

server.listen(3000, () => {
    console.log('Node server created at port 3000');
});
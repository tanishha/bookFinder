const http = require('http');

var server = http.createServer(function (req, res) {
    console.log('Welcome to the server');
    console.log('req url>>', req.url)
    console.log('req method>>', req.method)
})

server.listen(7000, function (err, done) {
    if (err) {
        console.log('Server failed to connect');

    } else {
        console.log('Server connected to 7000');
    }
})
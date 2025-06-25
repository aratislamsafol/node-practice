var fs = require("fs");
var http = require('http');

var server = http.createServer(function ( req, res ) {
    if(req.url == "/") {
        // async fs.readFile(filePath, fileOptions, cb)
        // fs.readFile('Home.html', function (err, data){
        //     res.writeHead(200, {'Content-type': 'text/html'})
        //     res.write(data);
        //     res.end();
        // } );

        // sync
        var mySite = fs.readFileSync('Home.html');
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(mySite);
        res.end();
    }
})

server.listen(5040);
console.log("server run success");
var fs = require("fs");
var http = require('http');

var server = http.createServer(function ( req, res ) {
    if(req.url == "/") {
        // file write Async
       fs.unlink( 'new-demo.txt', function(err){
        if(err) {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write("Failed to Delete");
            res.end();
        }else{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write("Delete Successfully ");
            res.end();
        }
       })
    } else if(req.url == '/about') {
        // sync write file
         try {
            fs.unlinkSync('sync-new.txt');
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write("Delete Successfully");
            res.end();
        } catch (err) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write("Failed to Delete");
            res.end();
        }
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.write("404 Not Found");
        res.end();
    
    }
})

server.listen(5040);
console.log("server run success");
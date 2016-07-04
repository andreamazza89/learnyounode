var http = require('http');
var fs = require('fs');

var server = http.createServer(serverSetup);

function serverSetup(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.setHeader('X-Foo', 'bar');
  response.writeHead(200, {'Content-Type': 'text/plain'});

  var fileContents = fs.createReadStream(process.argv[3]);
  var stream = '';

  fileContents.on('data', function(chunk) { stream += chunk });
  fileContents.on('end', function() { response.end(stream); });
   
}

var portNumber = process.argv[2];
server.listen(portNumber, function() { console.log('listening on port ' + portNumber); });

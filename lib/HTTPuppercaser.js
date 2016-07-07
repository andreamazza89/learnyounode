var http = require('http');
var port = process.argv[2];
console.log(port);
var server = http.createServer(serverSetup);

function serverSetup(request, response) {

  var myResponse = '';

  if (request.method === 'POST') {
    request.on('data', function(chunk) {
      myResponse += chunk.toString('utf-8').toUpperCase()
    });

  request.on('end', function() {response.end(myResponse);});
  
  } 
}

server.listen(port);

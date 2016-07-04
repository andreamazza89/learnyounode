var http = require('http');

var server = http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var lol = "";

  request.on('error', function(error) { console.error(error); });
  request.on('data', function(chunk) { lol += chunk; });
  request.on('end', function() { 
    response.on('error', function(error) { console.error(error); });
    
    response.writeHead(200, {'Content-Type': 'application/json'})

    var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: lol
    };

    response.write(JSON.stringify(responseBody));
    response.end();

  });
});

server.listen('3000');

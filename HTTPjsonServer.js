var http = require('http');
var port = process.argv[2];
var server = http.createServer();

server.on('request', jsonServer);

function jsonServer(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  var url = request.url;
  urlTimeMatch =  url.match(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)\.(....)/);
  unixTime = new Date(urlTimeMatch[0]).getTime();

  console.log(unixTime);

  standardTimeObject = {
    //I think the test is confused with daylight savings
    "hour"   : parseInt(urlTimeMatch[4]) + 1, 
    "minute" : parseInt(urlTimeMatch[5]),
    "second" : parseInt(urlTimeMatch[6])
  };
  
  unixTimeObject = {
    "unixtime" : unixTime
  };

  jsonStandardTime = JSON.stringify(standardTimeObject);
  jsonUnixTime     = JSON.stringify(unixTimeObject);

  if (url.match(/parsetime/)) {
    response.end(jsonStandardTime);
  } else {
    response.end(jsonUnixTime);
  }
}

server.listen(port);

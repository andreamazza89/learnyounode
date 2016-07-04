var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var res1body = '';
var res2body = '';
var res3body = '';

http.get(url1, function(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    res1body += data;
  })
  response.on('end', secondGet);
});

function secondGet() {
  http.get(url2, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
      res2body += data;
    })
    response.on('end', finalGet);
  });
}

function finalGet() {
  http.get(url3, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      res3body += data;
    });
    response.on('end', function() {
      console.log(res1body);
      console.log(res2body);
      console.log(res3body);
    });
  });
}

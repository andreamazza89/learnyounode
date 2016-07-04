var http = require('http');
console.log(http);
var url = process.argv[2];
console.log(url);

http.get(url, function(response){
  var allData = '';
  response.setEncoding('utf8');
  response.on('data', function(data){
    allData += data;
  })
  response.on('end', function(){ 
    console.log(allData.split('').length);
    console.log(allData);
  });
});

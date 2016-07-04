var net = require('net');

net.createServer(function(socket) {
  var dateTime   = new Date();
  var year       = dateTime.getFullYear();
  var month      = dateTime.getMonth() + 1;
  var day        = dateTime.getDate();
  var hour       = dateTime.getHours();
  var minute     = dateTime.getMinutes();
  var prettyDate = year + '-0' + month + '-0' + day + ' ' + hour + ':' + minute + '\n';
  socket.end(prettyDate);
}).listen(process.argv[2]);

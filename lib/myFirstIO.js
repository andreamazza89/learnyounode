var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', countNewLines);

function countNewLines(error, content) {
  console.log(content.split('\n').length - 1);
};

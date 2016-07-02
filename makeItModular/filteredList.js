var fileFilter = require('./fileFilter')
var path = process.argv[2];
var extension = process.argv[3];

function printFilesArray(error, data) {
  if (error) {
    throw ('error!');
  } else {
    data.forEach(function(filename) { 
      console.log(filename)
    });
  }
}

fileFilter(path, extension, printFilesArray);

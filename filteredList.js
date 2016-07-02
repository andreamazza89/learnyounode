var fs = require('fs');
var path = process.argv[2];
var extension = '.' + process.argv[3];


fs.readdir(path, selectExtensions);

function selectExtensions(error, data) {
  if (error) {
    throw ('Could not read directory');
  } else {
    filtered = data.filter(matchExtension);
    filtered.forEach(function(filename) { 
      console.log(filename)
    });
  }
}

function matchExtension(name) {
  return name.match(extension);
}

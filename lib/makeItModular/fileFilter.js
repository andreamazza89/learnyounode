var fs = require('fs');

function fileFilter(dirName, extension, callback) {
    fs.readdir(dirName, function(err, data) {
      if (err) { return callback(err); }
      filtered = data.filter(function(name) { return name.match('.' + extension); });
      callback(err, filtered);
    });
}

module.exports = fileFilter;

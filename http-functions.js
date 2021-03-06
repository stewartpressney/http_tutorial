const https = require('https');

var getHTML = require('./print_uppercase');

module.exports = function getHTML (options, callback) {

  var requestOptions = options

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');
//the callback is invoked when a `data` chunk is recieved
    response.on('data', function(data){
      callback(data);
    });
  });
};


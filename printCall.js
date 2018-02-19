const https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };


function getHTML (options, callback) {

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');
//the callback is invoked when a `data` chunk is recieved
    response.on('data', function(data){
      printHTML(data);
    });
  });
};

function printHTML(html){
  console.log(html);
}

getHTML();
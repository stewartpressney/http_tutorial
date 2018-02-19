const https = require('https');

function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    }
  //https.get takes a single paramater callback
  //response, which is a stream to represent the http response

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');
//the callback is invoked when a `data` chunk is recieved
    response.on('data', function(data){
      console.log('chunk Recieved. Length:', data);
    });

//the callback is invoked when a `data` as been recieved
//(end of stream)
    response.on('end', function(){
      console.log('Response stream complete.')
    });
  });
};

getAndPrintHTMLChunks();
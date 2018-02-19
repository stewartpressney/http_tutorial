const https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


function getAndPrintHTML (options) {

  var options = requestOptions

  /* Add your code here */
  var output = "";

  https.get(options, function(response) {

    response.setEncoding('utf8');
//the callback is invoked when a `data` chunk is recieved
    response.on('data', function(data){
      output += data + '/n';
    });

//the callback is invoked when a `data` as been recieved
//(end of stream)
    response.on('end', function(){
      console.log(output);
    });
  });
};

getAndPrintHTML ();
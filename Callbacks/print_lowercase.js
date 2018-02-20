var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.lowercase.html'
};

var output = getHTML(requestOptions, outputLowCase);

function outputLowCase (output) {
  console.log(output.toLowerCase());
 };
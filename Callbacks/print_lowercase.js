var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.uppercase.html'
};

var output = getHTML(requestOptions, outputToUpCase);

function outputToUpCase (output) {
  console.log(output.toLowerCase());
 };
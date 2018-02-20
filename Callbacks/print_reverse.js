var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.reverse.html'
};

var output = getHTML(requestOptions, reverseOutput);

function reverseOutput (output) {
  console.log(output.split("").reverse().join(""));
 };
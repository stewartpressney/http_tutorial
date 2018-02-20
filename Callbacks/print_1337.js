var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.reverse.html'
};

var output = getHTML(requestOptions, print_1337);

function print_1337 (output){
  output = output.replace(/a/gi,'4');
  output = output.replace(/e/gi,'3');
  output = output.replace(/o/gi,'0');
  output = output.replace(/l/gi,'1');
  output = output.replace(/s/gi,'5');
  output = output.replace(/t/gi,'7');
  output = output.replace(/ck/gi,'x');
  output = output.replace(/er/gi,'0r');
  output = output.replace(/you/gi,'j00');
  console.log(output);
};
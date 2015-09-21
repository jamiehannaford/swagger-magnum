var parser = require('swagger-parser');
var fs     = require('fs');

var inputFile  = __dirname + "/v1/swagger.json";
var outputFile = __dirname + '/v1/swaggerFull.json';

parser.dereference(inputFile)
  .then(function(api) {
    var json = JSON.stringify(api, null, 3);
    fs.writeFile(outputFile, json, function(err) {
      if (err) {
        console.error(err);
      }
      console.log(outputFile + " was saved!");
    });
  })
  .catch(function(err) {
    console.log("Could not dereference!");
    console.error(err);
  });


var https = require("https");
var http = require("http");
var printers = require("./printers.js");

function get(username) {
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";
    
    response.on("data", function(chunk) {
      body += chunk;
    });
    response.on("end", function() {
      if(response.statusCode === 200) {
        try {
          var profile = JSON.parse(body);
          printers.printMessage(username,profile.badges.length,profile.points.JavaScript);
        }
        catch(error) {
          printers.printError(error);
        }
      }
      else {
        printers.printError({"message": "Error getting profile " + username + ": " + response.statusCode + " " + http.STATUS_CODES[response.statusCode]});
      }
    });
  });

  request.on("error", printers.printError);
}

module.exports.get = get;
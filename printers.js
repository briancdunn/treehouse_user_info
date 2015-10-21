function printMessage(username, badges, points) {
  var message = username + ": " + badges + " badges, " + points + " points";
  console.log(message);
}

function printError(error) {
  console.log(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;
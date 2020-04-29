// all the middleare goes here
var middlewareObj = {};

middlewareObj.isLocal = function(req, res, next) {
  var env = "";
  if (process.env.HOST === "http://localhost") {
    var env = "local";
    return env;
  }
  else {
    var env = "prod";
    return env;
  }
}

module.exports = middlewareObj;

var http = require("http");
const dashbotKey = secret.get("dashbotKey");

function sendToDashbot(type, body) {
  var url = "https://tracker.dashbot.io/track";

  var options = {
    passAsJson: true,
    query: {
      platform: "universal",
      v: "10.1.1-rest",
      type: type,
      apiKey: dashbotKey
    },
    headers: {
      "Content-Type": "application/json"
    }
  };

  http.postUrl(url, body, options);
}

function createBody(actionName, message, context, params) {
  return {
    text: message,
    userId: context.userId,
    sessionId: context.sessionId,
    intent: {
      name: actionName,
      inputs: params.inputs
    },
    images: params.images,
    buttons: params.buttons,
    platformUserJson: {
      locale: context.locale,
      timezone: context.timezone
    }
  };
}

module.exports.incoming = function(actionName, message, context, params) {
  var body = createBody(actionName, message, context, params);

  sendToDashbot("incoming", body);
}

module.exports.outgoing = function(actionName, message, context, params) {
  var body = createBody(actionName, message, context, params);

  sendToDashbot("outgoing", body);
}

# bixby-dashbot-analytics
Collect analytics in your bixby capsules

## Basic Use

### Installation
Copy the `lib/dashbot.js` file into your capsule. It should be named `code/lib/dashbot.js`.

### Configuration
Add a secret to the capsule called `dashbotKey` and add an api key from dashbot.

### Sending Data

In your action, include the library:
```javascript
const dashbot = require("./lib/dashbot");
```

Then call either `dashbot.incoming` or `dashbot.outgoing` depending on if you're logging user messages or your response.

```javascript
dashbot.incoming(
  "actionName",
  "Some query from the user",
  $vivContext, 
  {}
);
```

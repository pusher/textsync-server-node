# Textsync node Library

A node.js library to simplify token generation for TextSync authorization endpoints.

## Instantiation

```
const TextSync = require('textsync-server-node');
let textsync = new TextSync({
  locator: INSTANCE_LOCATOR,
  key: KEY,
});
````

## Authorisation Endpoint

```
const TextSync = require('textsync-server-node');

let textsync = new TextSync({
  locator: INSTANCE_LOCATOR,
  key: KEY,
});

app.post('/textsync/tokens', (req, res) => {
  const getPermissions = documentId => {
    // some logic to determine the rights the client req originates from has
    // ..
    // ..
    // ..
    return [TextSync.Permissions.READ, TextSync.Permissions.WRITE];
  };
  textsync.authorizeDocument(req.body, getPermissions).then(token => {
    res.send(token);
  });
});
```

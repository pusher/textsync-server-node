# TextSync Node Library


Server side library for [TextSync](https://pusher.com/textsync).  It's useful
for generating tokens in the format expected by the TextSync client library
when an authorization endpoint is configured.

# Usage
## Importing

It's possible to import `textsync-server-node` using ES6 modules.

```js
import TextSync from 'textsync-server-node';
```

Commonjs is supported too.

```js
const TextSync = require('textsync-server-node');
```

## Instantiation

The constructor takes a single options object with the following required keys:

- `instanceLocator`
- `key`

Both of which should be available from the keys page of your TextSync dashboard.

```js
let instance = new TextSync({
  instanceLocator: INSTANCE_LOCATOR,
  key: KEY,
});
```

## Authorization

```js
instance.authorizeDocument(requestData, permissionsFn, options);
```

- `requestData` (required) - body of the request from the client library
- `permissionsFn` (required) - a function returning a promise resolving to the permissions
  the user making the request has to `docId`. The library exposes the
  available permissions (at present there is only `TextSync.Permissions.READ`
  and `TextSync.Permissions.WRITE`)
- `options` (optional) - an object containing authorization options. At present
  the only option available `tokenExpiry`


## Example

```js
const TextSync = require('textsync-server-node');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


let textSync = new TextSync({
  locator: INSTANCE_LOCATOR,
  key: KEY,
});

app.post('/textsync/tokens', (req, res) => {
  const getPermissions = docId => {
    return new Promise((resolve, reject) => {
      // Some async logic to determine what permissions the user has
      //
      // Permissions are modelled as an array of TextSync.Permissions exports
      resolve([TextSync.Permissions.READ, TextSync.Permissions.WRITE]);
    });
  };
  const options = { tokenExpiry: (60 * 15) }; // 15 minutes;
  textSync.authorizeDocument(req.body, getPermissions, options).then(token => {
    res.send(token);
  });
});
```

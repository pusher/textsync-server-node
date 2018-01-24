export {
  TextSync as default,
  TextSyncOptions,
  PermissionsFunction,
  RequestData
} from './lib/textsync';

export { TextSyncAuthResponse } from './lib/authorizer';

const { Permissions } = require('./lib/permissions');
const { TextSync } = require('./lib/textsync');
module.exports = TextSync;
module.exports.Permissions = Permissions;
module.exports.default = TextSync;

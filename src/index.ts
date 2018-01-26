export {
  TextSync as default,
  TextSyncOptions,
  PermissionsFunction,
  RequestData
} from './lib/textsync';

export { TextSyncAuthResponse, AuthorizeOptions } from './lib/authorizer';
export { Permissions } from './lib/permissions';

const { Permissions } = require('./lib/permissions');
const { TextSync } = require('./lib/textsync');
module.exports = TextSync;
module.exports.Permissions = Permissions;
module.exports.default = TextSync;

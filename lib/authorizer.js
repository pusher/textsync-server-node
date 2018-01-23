const { Instance, AuthenticationResponse } = require('pusher-platform-node');
const { Permissions } = require('./permissions');
const DEFAULT_PAYLOAD = { grant_type: 'client_credentials' };

class Authorizer {
  constructor(instance) {
    this.instance = instance;
  }

  buildServiceClaims(documentId, permissions) {
    return { textsync: { documentId, permissions } };
  }

  authorize(documentId, permissions, options) {
    let opts = {
      serviceClaims: { ...this.buildServiceClaims(documentId, permissions) }
    };
    return this.instance.authenticate(DEFAULT_PAYLOAD, opts);
  }
}

module.exports = Authorizer;

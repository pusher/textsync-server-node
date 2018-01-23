const { Instance, InstanceOptions } = require('pusher-platform-node');
const Permissions = require('./permissions');
const Authorizer = require('./authorizer');

class TextSync {
  constructor(options) {
    let instanceOptions = Object.assign(
      {
        serviceName: 'textsync',
        serviceVersion: 'v1'
      },
      options
    );
    this.instance = new Instance(instanceOptions);
    this.authorizer = new Authorizer(this.instance);
  }

  authorizeDocument(request, permissionsFn) {
    const documentId = request.documentId;
    const permissions = permissionsFn(documentId);
    return this.authorizer.authorize(documentId, permissions);
  }
}

module.exports = TextSync;

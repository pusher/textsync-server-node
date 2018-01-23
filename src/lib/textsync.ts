import { Instance, InstanceOptions } from 'pusher-platform-node';
import { Permissions } from './permissions';
import { default as Authorizer, TextSyncAuthResponse } from './authorizer';

export type TextSyncOptions = InstanceOptions;
export type PermissionsFunction = (documentId: string) => Permissions[];

export default class TextSync {
  instance: Instance;
  authorizer: Authorizer;

  constructor(options: TextSyncOptions) {
    this.instance = new Instance(options);
    this.authorizer = new Authorizer(this.instance);
  }

  authorizeDocument(
    request: any,
    permissionsFn: PermissionsFunction
  ): TextSyncAuthResponse {
    const documentId = request.documentId;
    const permissions = permissionsFn(documentId);
    return this.authorizer.authorize(documentId, permissions);
  }
}

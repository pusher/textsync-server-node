import { Instance, InstanceOptions } from 'pusher-platform-node';
import { Permissions } from './permissions';
import { default as Authorizer, TextSyncAuthResponse } from './authorizer';

export type TextSyncOptions = {
  locator: string;
  key: string;
};
export type PermissionsFunction = (
  documentId: string
) => Promise<Permissions[]>;

export interface RequestData {
  documentId: string;
}

export default class TextSync {
  instance: Instance;
  authorizer: Authorizer;

  constructor(options: TextSyncOptions) {
    let instanceOptions: InstanceOptions = Object.assign(
      {
        serviceName: 'textsync',
        serviceVersion: 'v1'
      },
      options
    );
    this.instance = new Instance(instanceOptions);
    this.authorizer = new Authorizer(this.instance);
  }

  authorizeDocument(
    requestData: RequestData,
    permissionsFn: PermissionsFunction
  ): Promise<TextSyncAuthResponse> {
    const documentId = requestData.documentId;
    return permissionsFn(documentId).then(permissions => {
      return this.authorizer.authorize(documentId, permissions);
    });
  }
}

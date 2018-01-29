import { Instance, InstanceOptions } from 'pusher-platform-node';
import { Permissions } from './permissions';
import {
  default as Authorizer,
  TextSyncAuthResponse,
  AuthorizeOptions
} from './authorizer';

export type TextSyncOptions = {
  instanceLocator: string;
  key: string;
};
export type PermissionsFunction = (docId: string) => Promise<Permissions[]>;

export interface RequestData {
  docId: string;
}

export class TextSync {
  instance: Instance;
  authorizer: Authorizer;

  constructor({ instanceLocator, key }: TextSyncOptions) {
    let instanceOptions: InstanceOptions = {
      serviceName: 'textsync',
      serviceVersion: 'v1',
      locator: instanceLocator,
      key
    };
    this.instance = new Instance(instanceOptions);
    this.authorizer = new Authorizer(this.instance);
  }

  authorizeDocument(
    requestData: RequestData,
    permissionsFn: PermissionsFunction,
    options?: AuthorizeOptions
  ): Promise<TextSyncAuthResponse> {
    const docId = requestData.docId;
    let authorizeOpts: AuthorizeOptions = {};
    if (options && options.tokenExpiry) {
      authorizeOpts.tokenExpiry = options.tokenExpiry;
    }
    return permissionsFn(docId).then(permissions => {
      return this.authorizer.authorize(docId, permissions, authorizeOpts);
    });
  }
}

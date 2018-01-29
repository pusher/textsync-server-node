import { Instance } from 'pusher-platform-node';
import { Permissions } from './permissions';
import { default as Authorizer, TextSyncAuthResponse, AuthorizeOptions } from './authorizer';
export declare type TextSyncOptions = {
    instanceLocator: string;
    key: string;
};
export declare type PermissionsFunction = (docId: string) => Promise<Permissions[]>;
export interface RequestData {
    docId: string;
}
export declare class TextSync {
    instance: Instance;
    authorizer: Authorizer;
    constructor({instanceLocator, key}: TextSyncOptions);
    authorizeDocument(requestData: RequestData, permissionsFn: PermissionsFunction, options?: AuthorizeOptions): Promise<TextSyncAuthResponse>;
}

import { Instance } from 'pusher-platform-node';
import { Permissions } from './permissions';
import { default as Authorizer, TextSyncAuthResponse } from './authorizer';
export declare type TextSyncOptions = {
    locator: string;
    key: string;
};
export declare type PermissionsFunction = (documentId: string) => Promise<Permissions[]>;
export interface RequestData {
    documentId: string;
}
export default class TextSync {
    instance: Instance;
    authorizer: Authorizer;
    constructor(options: TextSyncOptions);
    authorizeDocument(requestData: RequestData, permissionsFn: PermissionsFunction): Promise<TextSyncAuthResponse>;
}

import { Instance, AuthenticationResponse } from 'pusher-platform-node';
import { Permissions } from './permissions';
export declare type TextSyncAuthResponse = AuthenticationResponse;
export declare type AuthoriseOptions = {
    tokenExpiry?: number;
};
export default class Authorizer {
    instance: Instance;
    constructor(instance: Instance);
    buildServiceClaims(documentId: string, permissions: Permissions[]): {
        textsync: {
            documentId: string;
            permissions: Permissions[];
        };
    };
    authorize(documentId: string, permissions: Permissions[], options?: AuthoriseOptions): AuthenticationResponse;
}

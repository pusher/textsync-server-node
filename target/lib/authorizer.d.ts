import { Instance, AuthenticationResponse } from 'pusher-platform-node';
import { Permissions } from './permissions';
export declare type TextSyncAuthResponse = AuthenticationResponse;
export declare type AuthorizeOptions = {
    tokenExpiry?: number;
};
export default class Authorizer {
    instance: Instance;
    constructor(instance: Instance);
    buildServiceClaims(docId: string, permissions: Permissions[]): {
        textsync: {
            docId: string;
            permissions: Permissions[];
        };
    };
    authorize(docId: string, permissions: Permissions[], options: AuthorizeOptions): AuthenticationResponse;
}

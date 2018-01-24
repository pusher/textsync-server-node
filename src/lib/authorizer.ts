import { Instance, AuthenticationResponse } from 'pusher-platform-node';
import { Permissions } from './permissions';

const DEFAULT_PAYLOAD = { grant_type: 'client_credentials' };

export type TextSyncAuthResponse = AuthenticationResponse;
export type AuthoriseOptions = {
  tokenExpiry?: number; // this is not yet implemented
};

export default class Authorizer {
  instance: Instance;
  constructor(instance: Instance) {
    this.instance = instance;
  }

  buildServiceClaims(documentId: string, permissions: Permissions[]) {
    return { textsync: { documentId, permissions } };
  }

  authorize(
    documentId: string,
    permissions: Permissions[],
    options?: AuthoriseOptions
  ): AuthenticationResponse {
    const serviceClaims = this.buildServiceClaims(documentId, permissions);
    return this.instance.authenticate(DEFAULT_PAYLOAD, { serviceClaims });
  }
}

import { Instance, AuthenticationResponse } from 'pusher-platform-node';
import { Permissions } from './permissions';

const DEFAULT_PAYLOAD = { grant_type: 'client_credentials' };

export type TextSyncAuthResponse = AuthenticationResponse;
export type AuthorizeOptions = {
  tokenExpiry?: number;
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
    options: AuthorizeOptions
  ): AuthenticationResponse {
    const serviceClaims = this.buildServiceClaims(documentId, permissions);
    let authenticateOptions = { serviceClaims };
    if (options.tokenExpiry) {
      authenticateOptions['tokenExpiry'] = options.tokenExpiry;
    }
    return this.instance.authenticate(DEFAULT_PAYLOAD, authenticateOptions);
  }
}

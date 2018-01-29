import {} from 'jest';

import { TextSync } from '../lib/textsync';
import { Permissions } from '../lib/permissions';

import { Instance } from 'pusher-platform-node';

const instanceLocator = 'v1:cluster:some-long-id';
const key = 'id:secret';

describe('textsync', () => {
  let textsync;
  beforeEach(() => {
    textsync = new TextSync({
      instanceLocator,
      key
    });
  });
  it('should provide a token object', () => {
    const request = { docId: 'my excellent document' };
    const permissionsFn = docId => Promise.resolve([Permissions.READ]);
    return textsync.authorizeDocument(request, permissionsFn).then(res => {
      expect(res).toHaveProperty('access_token', expect.any(String));
      expect(res).toHaveProperty('refresh_token', expect.any(String));
      expect(res).toHaveProperty('expires_in'), expect.any(Number);
      expect(res).toHaveProperty('token_type', expect.any(String));
    });
  });
});

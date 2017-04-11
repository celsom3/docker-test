import { expect } from 'chai';
import Wreck from 'wreck';
import '../../../../server';

const baseURL = 'http://127.0.0.1:8080';

describe('POST /api/v1/session', () => {
  const payload = {
    payload: {
      username: 'jdoe',
      password: 'password',
    },
  };

  it('successfully logs in', (done) => {
    Wreck.post(`${baseURL}/api/v1/session`, payload, (err, res) => {
      expect(err).to.be.null;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

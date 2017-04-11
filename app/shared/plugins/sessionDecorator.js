import { Session } from '../models';
import { parseBearerToken } from '../utils';

const getSessionData = (req) => parseBearerToken(req.headers)
  .then((sessionToken) => Session.findOne({ _id: sessionToken }))
  .catch(() => null);

export const register = (server, options, next) => {
  server.decorate('request', 'session', getSessionData, { apply: true });
  next();
};

export default register;

register.attributes = {
  name: 'session-decorator',
};

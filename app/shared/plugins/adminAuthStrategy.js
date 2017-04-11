import { Session , User } from '../models';
import { ensureObjectExists, ensureIsAdmin } from '../utils';

const auth = {
  strategy(server) {
    server.auth.strategy('simple', 'bearer-access-token', 'required', {
      allowQueryToken: false,
      allowMultipleHeaders: false,
      validateFunc: (token, callback) => Session.findOne({ _id: token })
        .then(getUser)
        .then(ensureUserExists)
        .then(ensureUserIsAdmin)
        .then((user) => {
          return callback(null, true, { token }, { user });
        })
        .catch(() => {
          return callback(null, false, { token }, { accessLevel: 0 });
        }),
    });
  },
};

const getUser = (session) => User.findOne({ _id: session.userId });

const ensureUserExists = (user) => ensureObjectExists(user, 'User does not exist');

const ensureUserIsAdmin = (user) => ensureIsAdmin(user);

export default auth;

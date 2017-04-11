import { Session, User } from '../models';

const auth = {
  strategy(server) {
    server.auth.strategy('simple', 'bearer-access-token', 'required', {
      allowQueryToken: false,
      allowMultipleHeaders: false,
      accessTokenName: 'access_token',
      validateFunc: (token, callback) => Session.findOne({ _id: token })
        .then(getUser)
        .then((user) => {
          return callback(null, true, { token }, { user });
        })
        .catch(() => {
          return callback(null, false, { token }, {});
        }),
    });
  },
};

const getUser = (session) => User.findOne({ _id: session.userId });

export default auth;

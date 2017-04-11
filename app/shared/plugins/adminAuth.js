import auth from './adminAuthStrategy';

export const register = (server, options, next) => {
  auth.strategy(server);
  next();
};

export default register;

register.attributes = {
  name: 'admin-auth',
};

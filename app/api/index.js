import routes from './routes';

export const register = (server, options, next) => {
  // db.setup();
  server.route(routes);
  next();
};

export default register;

register.attributes = {
  name: 'api',
};

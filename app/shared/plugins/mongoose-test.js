import mongoose from 'mongoose';
import bluebird from 'bluebird';

export const register = (server, options, next) => {
  mongoose.Promise = bluebird;
  mongoose.connect('mongodb://localhost/docker-test');
  next();
};

export default register;

register.attributes = {
  name: 'mongoose',
};

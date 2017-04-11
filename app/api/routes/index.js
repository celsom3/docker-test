import sessionRoutes from './session';

const home = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      reply('Hello World!');
    },
  },
];

export default [].concat(home, sessionRoutes);

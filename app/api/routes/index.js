import sessionRoutes from './session';
import quoteRoutes from './quotes';

const home = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      console.log('E.T. phone home!');
      reply('Hello World!');
    },
  },
];

export default [].concat(home, sessionRoutes, quoteRoutes);

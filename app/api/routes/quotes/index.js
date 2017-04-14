import quoteController from '../../controllers/quoteController';
import * as config from './config';

export default [
  {
    method: 'POST',
    path: '/quote',
    handler: quoteController.create,
    config: config.quote,
  },
];

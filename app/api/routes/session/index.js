import sessionController from '../../controllers/sessionController';
import * as config from './config';

export default [
  {
    method: 'POST',
    path: '/v1/session',
    handler: sessionController.login,
    config: config.login,
  },
  {
    method: 'DELETE',
    path: '/v1/session',
    handler: sessionController.logout,
    config: config.sessionToken,
  },
];

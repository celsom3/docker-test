import Glue from 'glue';
import manifest from './manifest.json';

import env from 'dotenv';
env.config();

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
  server.start((err) => {
    if (err) {
      throw err;
    } else {
      /* eslint-disable no-console */
      console.log('Started server');
      /* eslint-enable no-console */
    }
  });
});

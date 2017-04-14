import Boom from 'boom';
import quoteStore from '../stores/quoteStore';

const quoteController = {
  create(req, reply) {
    quoteStore.create(req.payload)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  },
};

export default quoteController;

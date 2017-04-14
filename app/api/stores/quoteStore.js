import { Quote } from '../../shared/models';

const quoteStore = {
  create(payload) {
    return Quote.create(payload);
  },
};

export default quoteStore;

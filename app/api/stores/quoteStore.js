import { Quote } from '../../shared/models';

const quoteStore = {
  create(payload) {
    return Quote.create(payload);
  },
  getAll() {
    return Quote.find();
  },
};

export default quoteStore;

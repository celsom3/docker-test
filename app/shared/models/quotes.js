import { Schema } from 'mongoose';

const quoteSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default quoteSchema;

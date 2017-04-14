import mongoose from 'mongoose';
import removeId from '../plugins/removeId';
import quoteSchema from './quotes';

const schemas = [
  quoteSchema,
];

schemas.map((schema) => schema.plugin(removeId));

export const Quote = mongoose.model('Quote', quoteSchema);

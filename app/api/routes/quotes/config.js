import Joi from 'joi';

export const quote = {
  validate: {
    payload: {
      message: Joi.string().required(),
    },
  },
};

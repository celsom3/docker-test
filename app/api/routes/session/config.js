import Joi from 'joi';

export const login = {
  validate: {
    payload: {
      username: Joi.string().required(),
      password: Joi.string().required()
        .min(6)
        .max(50)
        .alphanum(),
    },
  },
  auth: false,
};

export const sessionToken = {
  validate: {
    payload: {
      sessionToken: Joi.string().required(),
    },
  },
};

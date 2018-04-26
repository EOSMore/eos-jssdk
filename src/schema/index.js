import Joi from 'joi';

export * from './types';

export const validate = async (params, schema) => {
  try {
    return await Joi.validate(params, schema);
  } catch (error) {
    const detail = error.details[0];
    return detail.message;
  }
};

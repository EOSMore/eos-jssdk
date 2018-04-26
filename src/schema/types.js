import Joi from 'joi';

const Name = Joi.string().regex(/^[\.a-z1-5]{1,12}$/);

export {
  Name
};

import Joi from 'joi';

const Name = Joi.string().regex(/^[\.a-z1-5]{1,12}$/);
const String = Joi.string();
const BlockIdOrNum = Joi.alternatives().try(Joi.string(), Joi.number().min(1));

export {
  Name,
  String,
  BlockIdOrNum
};

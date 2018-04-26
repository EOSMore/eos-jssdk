import Joi from 'joi';

const Name = Joi.string().regex(/^[\.a-z1-5]{1,12}$/);
const String = Joi.string();
const BlockIdOrNum = Joi.alternatives().try(Joi.string(), Joi.number().min(1));
const Boolean = Joi.boolean();
const Number = Joi.number();
const PublicKey = Joi.string().length(53);

export {
  Name,
  String,
  BlockIdOrNum,
  Boolean,
  Number,
  PublicKey
};

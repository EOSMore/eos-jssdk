import Joi from 'joi';
import mapValues from 'lodash/mapValues';
import has from 'lodash/has';
import set from 'lodash/set';

export * from './types';

export const validate = async (params = {}, schema = {}) => {
  const defaultParams = {};
  schema = mapValues(schema, (def, key) => {
    if (def.isJoi) {
      return def;
    }
    if (!has(def, 'type')) {
      return Joi.any();
    }
    if (has(def, 'default')) {
      set(defaultParams, key, def.default);
    }
    return def.type;
  });
  params = { ...defaultParams, ...params };
  try {
    return await Joi.validate(params, schema);
  } catch (error) {
    const detail = error.details[0];
    throw new Error(detail.message);
  }
};

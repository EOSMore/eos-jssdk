import keys from 'lodash/keys';
import isObject from 'lodash/isObject';
import take from 'lodash/take';
import { validate } from './schema';

export default (url, definition) => {
  return async (...args) => {
    let params = {};
    if (args.length === 1 && isObject(args[0])) {
      params = args[0];
    } else {
      take(keys(definition.params), args.length).forEach((key, index) => params[key] = args[index]);
    }
    try {
      params = await validate(params, definition.params);
      return await fetch(url, { body: JSON.stringify(params), method: 'POST' }).then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          return response.text().then(body => {
            const error = new Error(body);
            error.status =  response.status;
            error.statusText = response.statusText;
            throw error;
          });
        }
      }).catch(error => {
        throw error;
      });
    } catch (error) {
      throw error;
    }
  };
};

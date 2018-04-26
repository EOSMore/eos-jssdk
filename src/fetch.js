import { validate } from './schema';

export default (url, definition) => {
  return async (params, option = {}) => {
    try {
      params = await validate(params, definition.params);
      const res = await fetch(url, { body: JSON.stringify(params), method: 'POST' }).then(response => {
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
        console.error(error);
        throw error;
      });
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

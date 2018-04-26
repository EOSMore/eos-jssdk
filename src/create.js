import api from './api';
import forEach from 'lodash/forEach';
import camelCase from 'lodash/camelCase';
import set from 'lodash/set';
import fetch from './fetch';

const defaultConfig = {
  httpEndpoint: 'http://127.0.0.1:8888',
  broadcast: true,
  debug: false,
  sign: true,
  chainId: '00' . repeat(32)
};

const getApiMethods = config => {
  const { httpEndpoint } = config;
  const methods = {};
  forEach(api, (groupConf, group) => {
    forEach(groupConf, (definition, method) => {
      const url = `${httpEndpoint}/v1/${group}/${method}`;
      method = camelCase(method);
      set(methods, method, fetch(url, definition));
    });
  });
  return methods;
};

const create = config => {
  config = { ...defaultConfig, ...config };

  const apiMethods = getApiMethods(config);

  return { ...apiMethods, ...config };
};


export default create;

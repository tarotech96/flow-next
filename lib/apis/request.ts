// Custom request

import axios from 'axios';

const request = axios.create({
  baseURL: process.env.BASE_URL || '',
});

request.interceptors.request.use(
  function (config) {
    // do something
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

request.interceptors.request.use(
  function (res) {
    // do something
    return res;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export { request };

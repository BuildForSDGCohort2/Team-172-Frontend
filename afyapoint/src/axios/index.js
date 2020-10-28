// @flow

import axios from "axios";

import { baseURL } from "../config";

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use((request) => {
  return request;
});

axios.interceptors.response.use((response) => {
  return response;
});

export default axios;

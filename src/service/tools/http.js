import axios from 'axios';
import { errorHandler } from './errorHandler';

export const baseURL = import.meta.env.VITE_API_BASE_URL;
export const http = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use((config) => {
  console.log('### request ###', config.url);
  if (hasToken()) {
    // TODO: 根据实际需求设置
    config.headers['Authorization'] = getToken();
  }
  return config;
});

http.interceptors.response.use(
  (response) => {
    const body = response.data;
    if (body.code === 0) {
      return body.data;
    }
    return Promise.reject(response);
  },
  (err) => {
    errorHandler(err);
    return Promise.reject(err);
  },
);

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
  return config;
});

http.interceptors.response.use((response) => {
  const body = response.data;
  if (body.code === 0) {
    return body.data;
  }
  return Promise.reject(response);
}, errorHandler);

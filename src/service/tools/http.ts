import axios, { type AxiosInstance, type AxiosResponse } from 'axios';
import { errorHandler } from './errorHandler';
import { hasToken, getToken } from './token';

export const baseURL = import.meta.env.VITE_API_BASE_URL;
export const http: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const TOKEN_HEADER_KEY: string = 'Authorization';
http.interceptors.request.use((config) => {
  if (hasToken()) {
    config.headers![TOKEN_HEADER_KEY] = getToken();
  }
  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => {
    const body = response.data;
    if (body.code === 0) {
      return body.data;
    }
    return Promise.reject(body.msg);
  },
  (err) => {
    errorHandler(err);
    return Promise.reject(err);
  },
);

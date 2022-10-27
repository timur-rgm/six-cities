import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';
import {getToken} from './token';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMUOUT = 5000;

enum HttpCode {
  Unauthorized = 401,
}

type UnauthorizedCallbackType = () => void;

export function createApi(onUnauthorized: UnauthorizedCallbackType): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMUOUT,
  })

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }

      return Promise.reject(error);
    }
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
}

import axios, { AxiosInstance, AxiosResponse, AxiosError, } from "axios";

const BACKEND_URL = 'https://12.react.pages.academy/six-cities';
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

  return api;
}

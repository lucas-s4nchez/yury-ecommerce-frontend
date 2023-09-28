import axios, { InternalAxiosRequestConfig } from "axios";
import {
  LocalStorageKeys,
  SnackbarUtilities,
  getInLocalStorage,
  getValidationError,
} from "../helpers";

export const PrivatePublicInterceptor = () => {
  const token = getInLocalStorage(LocalStorageKeys.ACCESS_TOKEN);
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    request.headers.Authorization = `Bearer ${token}`;

    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        SnackbarUtilities.error(getValidationError(error.response.data.error));
      } else {
        SnackbarUtilities.error(getValidationError(error.code));
      }
      return Promise.reject(error);
    }
  );
};

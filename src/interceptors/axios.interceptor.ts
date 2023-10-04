import axios, { InternalAxiosRequestConfig } from "axios";
import {
  LocalStorageKeys,
  SnackbarUtilities,
  getInLocalStorage,
  getValidationError,
} from "../helpers";
import { onLogout } from "../redux/states/userSlice";
import { AppDispatch, dispatch } from "../redux/store";

const clearUser = async (dispatch: AppDispatch) => {
  return dispatch(onLogout());
};

export const PrivatePublicInterceptor = () => {
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    if (getInLocalStorage(LocalStorageKeys.ACCESS_TOKEN)) {
      request.headers.Authorization = `Bearer ${getInLocalStorage(
        LocalStorageKeys.ACCESS_TOKEN
      )}`;
    }

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
      if (error.response.data.error === "ERR_INVALID_TOKEN") {
        clearUser(dispatch);
      }
      if (error.response.data.error === "ERR_NO_TOKEN_IN_REQUEST") {
        clearUser(dispatch);
      }
      if (error.response) {
        SnackbarUtilities.error(getValidationError(error.response.data.error));
      } else {
        SnackbarUtilities.error(getValidationError(error.code));
      }
      return Promise.reject(error);
    }
  );
};
